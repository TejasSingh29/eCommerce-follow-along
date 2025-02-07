import { BrowserRouter , Routes , Route} from "react-router-dom";
import { LoginPage,SignupPage,CreateProduct,Home,MyProducts} from "./Routes.jsx";
import './App.css' ;

function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
   
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/my-products" element={<MyProducts />} />
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;