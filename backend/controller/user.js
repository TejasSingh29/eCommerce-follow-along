const express = require('express');
const path = require('path');
const User = require('../model/user');  
const router = express.Router();
const {upload}=require('../multer');
const ErrorHandler = require('../utils/ErrorHandler');

//create user
router.post(
    "/create-user",
    upload.single("file"),
    async (req, res, next) => {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return next(new ErrorHandler("User already exists", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename);const express = require("express");
        const path = require("path");
        const fs = require("fs");
        const User = require("../model/user");
        const router = express.Router();
        const { upload } = require("../multer");
        const ErrorHandler = require("../utils/ErrorHandler");
        const catchAsyncErrors = require("../middleware/catchAsyncErrors");
        const bcrypt = require("bcryptjs");
        require("dotenv").config();
        
        router.post("/create-user",upload.single("file"),catchAsyncErrors(async (req, res, next) => {
            console.log("Creating user...");
            const { name, email, password } = req.body;
           console.log(name,email,password)
            const userEmail = await User.findOne({ email });
            if (userEmail) {
              if (req.file) {
                const filepath = path.join(__dirname, "../uploads", req.file.filename);
                try {
                  fs.unlinkSync(filepath);
                } catch (err) {
                  console.log("Error removing file:", err);
                  return res.status(500).json({ message: "Error removing file" });
                }
              }
              return next(new ErrorHandler("User already exists", 400));
            }
        
            let fileUrl = "";
            if (req.file) {
              fileUrl = path.join("uploads", req.file.filename);
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log("At Create ", "Password: ", password, "Hash: ", hashedPassword);
            const user = await User.create({
              name,
              email,
              password: hashedPassword,
              avatar: {
                public_id: req.file?.filename || "",
                url: fileUrl,
              },
            });
            console.log(user,"user");
            res.status(201).json({ success: true, user });
          })
        );
        
        router.get(
          "/profile",
          catchAsyncErrors(async (req, res, next) => {
            const { email } = req.query;
            if (!email) {
              return next(new ErrorHandler("Please provide an email", 400));
            }
            const user = await User.findOne({ email });
            if (!user) {
              return next(new ErrorHandler("User not found", 404));
            }
            res.status(200).json({
              success: true,
              user: {
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                avatarUrl: user.avatar.url,
              },
              addresses: user.addresses,
            });
          })
        );
        
        module.exports = router;
        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl,
        };

        console.log(user);
    }
);

module.exports = router;