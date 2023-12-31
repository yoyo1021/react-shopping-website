import { Routes , Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/front/SignUp";
import LandlordSignUp from "./pages/front/LandlordSignUp";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from "./pages/admin/AdminCoupons";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminArticles from "./pages/admin/AdminArticles";
import FrontLayout from "./pages/front/FrontLayout";
import Home from "./pages/front/Home";
import Products from "./pages/front/Products";
import ProductDetail from "./pages/front/ProductDetail";
import Cart from "./pages/front/Cart";
import Form from "./pages/front/Form";
import PaymentSuccess from "./pages/front/PaymentSuccess";
import OrderSuccess from "./pages/front/OrderSuccess";
import Favorite from "./pages/front/Favorite";
import Articles from "./pages/front/Articles";
import ArticleDetail from "./pages/front/ArticleDetail";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< FrontLayout />}>
          <Route path='' element={< Home />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="host-signup" element={<LandlordSignUp />}></Route>
          <Route path='products' element={< Products />}></Route>
          <Route path='favorite' element={<Favorite />}></Route>       
          <Route path='product/:id' element={< ProductDetail />}></Route>
          <Route path='cart' element={< Cart />}></Route>
          <Route path='form' element={< Form />}></Route>
          <Route path='order-success/:orderId' element={< OrderSuccess/>}></Route>
          <Route path='articles' element={< Articles />}></Route>
          <Route path='article/:id' element={< ArticleDetail />}></Route>
        </Route>
        
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route path='products' element={<AdminProducts />}></Route>
          <Route path='coupons' element={<AdminCoupons />}></Route>
          <Route path='orders' element={<AdminOrders/>}></Route>
          <Route path='articles' element={<AdminArticles/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
