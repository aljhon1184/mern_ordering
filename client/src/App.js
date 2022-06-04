import { BrowserRouter, Route, Routes} from "react-router-dom"
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
