import { Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
  </>
  )};

  

export default App;

