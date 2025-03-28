# E-Commerce-_FollowAlong
 **Features**

1. **Authentication Page**  
   - User Login and Signup functionality.  
   - Password security.  
   - Token-based authentication for session management.  

2. **Product Page**  
   - Displays a list of available products.  
   - Search and filter functionality for efficient product browsing.  

3. **Order Page**  
   - View all past orders with relevant details (product name, price, date).  
   - Track the status of current orders.  

4. **Payment Gateway**  
   - Multiple payment methods (credit/debit card, UPI, wallet).  
   - Secure transaction handling.  
   - Mock payment integration for testing.


   ## Tech Stack

### **Frontend**  
- **React**: For building an interactive and dynamic user interface.  
- **Next.js**: For server-side rendering and improving performance.  

### **Backend**  
- **Express.js**: For building the RESTful API to handle business logic.  
- **Mongoose**: For managing the MongoDB database and creating schemas.  

### **Database**  
- **MongoDB**: To store user information, product data, orders, and payment records. 
---

## MILESTONE1 :-
1. Set Up the Development Environment
Installed all the necessary tools and dependencies to set up the development environment for the MERN (MongoDB, Express, React, Node.js) stack project. This includes configuring the backend and frontend dependencies to ensure smooth development.
2. Understand Server-Client Interaction
Gained an understanding of how the frontend (React) interacts with the backend (Node.js/Express) using APIs. Focused on how the client sends requests to the server, and how the server processes them and sends back responses.
3. Set Up a Simple Server
Created a basic server using Node.js and Express, laying the foundation for the project. The server is set up to handle API requests and provide a foundation for future endpoints and business logic.

---
## MILESTONE 2  :-
1. Create a Structured Folder Hierarchy
Designed and implemented a structured folder hierarchy for the project, organizing the files in a way that ensures easy maintainability and scalability for both the frontend and backend.
2. Set Up React App (Frontend) and Node.js Server (Backend)
Frontend: Set up a React app to serve as the user interface for the project.
Backend: Configured a Node.js server using Express to handle API requests, providing the foundation for server-side logic and database interaction.
3. Configure Tailwind CSS for Styling
Integrated and configured Tailwind CSS into the project to streamline the styling process and improve the overall design flexibility with utility-first CSS.
4. Add Optional Extensions for Development Efficiency
Installed and configured optional extensions such as Prettier, ESLint, and others to improve code formatting, quality, and overall development workflow.
5. Build a Functional and Styled Login Page (Frontend)
Developed and styled a Login Page for the frontend using React, Tailwind CSS, and connecting it to the backend for user authentication functionality.

---
## MILESTONE3 :- 
1. Set Up Dedicated Folders for Organizing Backend Code
Created dedicated folders for organizing the backend code. This ensures better structure and maintainability of the server-side code, with clear separation of concerns.
2. Initialized and Configured a Node.js Server
Set up a Node.js server using Express to handle API requests. This provides the backbone for the backend, allowing it to process incoming requests and return responses.
3. Connected the Application to MongoDB
Established a connection to MongoDB, enabling the application to store and manage data in a NoSQL database. This allows for flexible data handling and seamless interactions with the backend.
4. Implemented Basic Error Handling
Incorporated basic error handling in the server to ensure smooth operation. This handles potential errors gracefully, improving the reliability and stability of the application.

---

## MILESTONE4 :-
1. Create a User Model
Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
2. Create a User Controller
Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
3. Enable and Configure Multer for File Uploads
Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.


---

## MILESTONE5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
     - Name (required)
     - Email (valid format required)
     - Password (minimum 2 characters)
     - Password Confirmation (must match password)

4. Used React Router for navigation.

---

## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 - Implemented an endpoint to create a new user.
 - Validated the email to ensure the user doesn’t already exist.
 - Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
- Incorporated centralized error handling using a custom ErrorHandler class.
- Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).

---

## Milestone 7 : 

1. Created a Login Endpoint

- Accepts user credentials (email/username and password).

- Retrieves the corresponding user from the database.

- Returns an error message if the user does not exist.

2. Implemented Password Validation

- Used bcrypt to hash the entered password.

- Compared it with the stored hashed password for authentication.

- If the passwords match, authentication is successful; otherwise, an error is returned.

---


## Milestone 8: 

## Updates & Changes

1. Created a Product Card Component :

- Designed a reusable ProductCard component.

- The card displays product details such as:

    - Product Image

    - Product Name

    - Price

    - Description

    - Add to Cart Button

- Used props to pass dynamic product data.

2. Implemented the Homepage Layout  

- Created a HomePage component to display multiple product cards.

- Used array mapping to iterate over a product list and render cards dynamically.

- Ensured a clean and structured layout for better UI/UX.

3. Updated Routes in App.jsx

- Integrated HomePage into the routing system.

- Ensured seamless navigation across the application.

---

## Milestone : 9

Today, we will create a frontend form for taking products input. Let’s dive in and understand what this all means!

Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a form that will take all the details of product
Learn how to take multiple images as input.
Why Create Product form?
Here we will create an form to input all the details of product.
This details will be eventually saved in database and will be displayed on products home page we created in previous milestone.
Steps for Milestone 9📝
Create the form for products

This form will take multiple product images images as input

Note:- This lesson will help you in understanding the basic creating of products please feel free to experiment on adding more features like creating an admin access and allow only admin to upload products or create and shop profile and a user with only shop profile can upload.

---

## Milestone 10:

**Creating the Product Schema and API Endpoint**
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.
1. Product Schema Definition:
- Defined a structured product schema using Mongoose to store product data in MongoDB.
- Ensured each field has proper validation to maintain data integrity:
- Name: Required, string**
- Description: Required, string
- Price: Required, number, with validation for non-negative values
- Image URL(s): Required, array of strings for multiple image storage
- Category: Required, string
- CreatedAt: Automatically generated timestamp

2. Endpoint Creation:
- Developed a POST endpoint (/api/products) to accept product details from the frontend.
- Implemented validation to ensure only correctly formatted data is stored in the database.
- Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
- Enforced strict validation to prevent invalid or incomplete product entries.
- Returned appropriate error messages for missing or incorrect data inputs.
4. Future Enhancements & Experimentation:
- Considered adding role-based access control:
- Admin Access: Only admin users can create new products.
- Shop Profiles: Restrict product uploads to users with a registered shop profile.
- Image Upload Handling: Implement a cloud-based solution (e.g., Cloudinary, AWS S3) for better image management. make this short

---

## Milestone 11 - Dynamic Home Page with Product Data

### Overview
#### In this milestone, we will make the home page dynamic by fetching and displaying all products stored in MongoDB.

- We will write a backend API endpoint to retrieve product data.
- The frontend will call this API and display the products dynamically using the ProductCard component.
#### Learning Goals 🎯
By completing this milestone, you will learn:
- ✅ How to write an API endpoint to fetch data from MongoDB.
- ✅ How to receive and handle data on the frontend.
- ✅ How to display data dynamically using components.

### Steps to Complete Milestone 11 📝

1. Backend: Create an API Endpoint
- Create an API route in Express.js to fetch all products from MongoDB.
- Use Mongoose to retrieve the data.
- This API fetches all products and sends them in JSON format.
- The frontend will call this API to get the list of products.


2. Frontend: Fetch Product Data
- Create a function to fetch product data from the backend using fetch() or Axios.
- Store the data in a state variable.
- useEffect calls the API when the page loads.
- setProducts stores the fetched data.
- map() loops through the products and passes each to ProductCard.


3. Display Products Dynamically
- The ProductCard component will receive product data as a prop and display it.
- Displays product image, name, and price dynamically.

#### Final Outcome 🎉
- ✅ The backend API sends all product data.
- ✅ The frontend fetches this data.
- ✅ Products are dynamically displayed using the ProductCard component.

---

# Milestone 12: My Products Page

## Overview
In this milestone, we will create a "My Products" page that displays all products added by a user based on their email. We will accomplish this by writing a backend endpoint to fetch products from MongoDB filtered by the user's email and dynamically displaying them on the frontend using the previously created product card component.

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint to filter and send data from MongoDB based on a user's email.
- Understand how to fetch and receive data on the frontend.
- Display data dynamically using a product card component.

## Steps to Complete Milestone 12 📝

### Backend:
1. **Create an endpoint** in your backend application that retrieves all products associated with a user's email from MongoDB.
2. **Filter products** based on the email provided in the request.
3. **Send the filtered data** as a response to the frontend.

### Frontend:
1. **Write a function** to fetch the filtered product data from the backend.
2. **Process the received data** and pass it to the product card component.
3. **Dynamically display** the products on the "My Products" page.

## Notes
- This lesson will help in understanding how to filter data based on specific constraints and send it to the client efficiently.
- Ensure proper error handling for scenarios where no products are found for a given email.

## Next Steps
- Enhance the UI with better styling and user experience.
- Implement pagination if needed for better performance.
- Add authentication checks to ensure only the logged-in user's products are displayed.

---

# Milestone 13 - Edit and Update Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **edit** the uploaded products. Users can now modify existing product details and save the updates in the MongoDB database.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that updates existing data in MongoDB.
- How to **auto-fill a form** with previous data and allow users to edit it.
- How to handle update operations effectively in a **full-stack** application.

---

# Milestone 14 - Delete Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **delete** products from MongoDB. Users can now remove existing products by clicking a delete button.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that deletes a product from MongoDB using a specific ID.
- How to handle delete operations effectively in a **full-stack** application.

---

# Milestone 15 - Creating a Navbar Component 🚀

## Learning Goals 🎯
By the end of this milestone, you will learn:
- How to create a **Nav** component.
- How to reuse the same component across multiple pages.
- How to make the Navbar **responsive** for all screen sizes.
- How to ensure smooth navigation between pages.

---

## Steps for Milestone 15 📝

### 1  Create a New `Nav` Component
- The Navbar should include links to the following pages:
  - **Home**
  - **My Products**
  - **Add Product**
  - **Cart**
- Ensure the Navbar is responsive and adapts to different screen sizes.

### 2 Add Navbar to All Pages
- Import and integrate the `Nav` component into all pages.
- Ensure smooth navigation between different sections of the application.

### 3 Make the Navigation Smooth & User-Friendly
- Use **React Router** for handling navigation.
- Implement active link highlighting for better UX.
- Optimize the layout to be mobile-friendly.

---

# Milestone 16 - Creating a Product Info Page 🛒

## Learning Goals 🎯
By the end of this milestone, you will learn:
- How to create a **new page** to display each product.
- How to add a **quantity selector** and an **Add to Cart** button.

---

## Steps for Milestone 16 📝

### 1 Create a New Product Info Page
- The page should display detailed information about a product.
- Include product **name, image, price, and description**.

### 2 Add a Quantity Selector
- Allow users to select the desired quantity of the product.
- Ensure the quantity selection updates dynamically.

### 3 Implement the Add to Cart Button
- Add a button that allows users to add the selected quantity of the product to their cart.
- Ensure smooth user interaction and feedback after adding to cart.


---

## Steps for Milestone 17📝
## 1. Write the cart schema to store products

## 2. Write an endpoint to store receive and store product details in cart



## Steps for Milestone 18📝

1.Create an Backend endpoint for cart page

 2.Write and endpoint to get products inside cart for user




## Steps for Milestone 19📝

1. create cart frontend page and display the products

 2. For each product add an option to increase and decrease quantity using + and - buttons.

 3.Create an Backend endpoint for increase and decrease quantity

 
 ## Steps for Milestone 20📝
1. Create an Backend endpoint that will sent user data

2. create frontend profile page

3. display profile photo, name and email in one section

4. In another section display address and add an button called "Add address"

5. If there are no address display "No address found"



## Steps for MIlestone 21 
 1. Create an frontend form that will will take address.

 2. Take country, city, address1, address2, zip code, address type.


 ## Steps for Milestone 22📝

 1. You need to create an endpoint that will receive the address from address form in frontend
 2. Add the address to the address array inside user collection.



## Steps for Milestone 23📝
1.Create an placeorder button inside cart page and navigate to select address page when clicked.
2.Create and select address page that will display all the available address and have an option to select one address.
3.Write an backend endpoint that will send all the addresses of the user.

## Steps for Milestone 24📝
1.First we will display all the products we are ordering.
2.Next we will display the address user selected to deliver.
3.We will display the total value of the cart.
4.We will have an place order button at the bottom.

## Steps for Milestone 25📝
You need to create an endpoint that will receive the products, user, address details
You will get the mail of the user using that you need to retrive the _id of the user
For each product the order will be different with same address
using order schema you created earlier you will store order details in mongodb order collection

## Steps for Milestone 26📝
You need to create an endpoint that will receive the user mail
You will get the mail of the user using that you need to retrive the _id of the user
Using that _id you need to get all the orders of that user
Send all the users orders in the response.

## Steps for Milestone 27📝
You need to create an my-orders page
You will send an get request to my-orders endpoint that we created in previous milestone.
We will send user mail in to endpoint to get all the user orders
Display all the user orders
We will add my-orders page in navbar for better navigation.

## Steps for Milestone 28📝
In my-orders page for every order add cancel order button
If the order is already canceled this button should not be displayed
You need to create an endpoint that will receive the order-id
Get the order using this id and mark the status canceled and save

## Steps for Milestone 29📝
Please create an PayPal account first PayPal developer dashboard
Once you login you can see an option for an sandbox accounts.
Copy the UserID of that account and save it.
In this sandbox accounts you can find your client id copy and save it.
In your order conformation page you need two options for payment one is COD and another is online payment.
Create radio buttons to select COD or online payment and when we click on online payment PayPal buttons need to be displayed.
In next milestone we will write an code to display and use those PayPal online Payments buttons.

## Steps for Milestone 30📝
After creating PayPal account and getting the UserID inside sandbox account.
Implement online payment using PayPal API using the client key you created earlier.
Download NPM package called react-paypal-js that will provide an component called PayPalScriptProvider which will display online payment methods like credit or debit card etc..

## Steps for Milestone 31📝
Install an npm package called react-redux
create an new folder called store with two files store.js and userActions.js.
We will store user mail inside global state.
In store.js file configure an store with userReducer function that will handle global user email state.
Inside userActions.js file write an function called setEmail that will help in storing email state inside global state.
In Index.js file make sure to wrap APP component inside provider component with store as props.

## Steps for Milestone 32📝
In Login page we will use Dispatch method to store the mail inside global state
In all the remaining pages acc the mail stored in global state using useSelector.

## Steps for Milestone 33📝
Download jsonwebtoken package using NPM
Use sign method to create an JWT token with mail and ID
Give maxAge to set expire time
Add the cookie inside the response that helps you to store the cookie inside browser.

## Steps for Milestone 34📝
Get the token from the browser cookie and send it to the server
In backend write an middleware function to validate that JWT token
In every page make sure that this steps will happen so that user cannot go to that page with out login

## Steps for Milestone 35📝
Deploy your backend in any of the deployment service and get the backend deployment link.
replace the localhost in frontend with the backend deployment lint.
Deploy the frontend in any of the deployment service
Make sure that both frontend and backend were correctly deployed and working properly.

