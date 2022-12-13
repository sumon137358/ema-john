import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/SHOP/Shop";
import Order from "./components/Order/Order";
import Manage from "./components/Manage/Manage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/ErrorHandle/Error";
import ProductDetail from "./components/ProductDetails/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/Inventory" element={<Manage/>}/>
        <Route path="/product/:productKey" element={<ProductDetail/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
