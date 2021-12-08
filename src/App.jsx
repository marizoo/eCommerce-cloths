import { Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from './pages/Home';
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPg from "./pages/ProductPg";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} /> 
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} /> 
      </Routes>
      <Routes>
        <Route path="/product" element={<ProductPg />} /> 
      </Routes>
      <Routes>
        <Route path="/productlist" element={<ProductList />} /> 
      </Routes>
  </>
  )};

  

export default App;

