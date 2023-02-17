import React from "react";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import Home from "./pages";

import AnnualReport from "./pages/annual";

import Blogs from "./pages/Helpcenter";



import Signup  from "./pages/Signup/Signup";

import catagories from './pages/catagories';
import signin from "./pages/Signin/Signin";

import ProductListing from "./pages/ProductListing/ProductListing"
import ProductPage from "./pages/ProductPage/ProductPage";
import ShippingCost from "./pages/ShippingCost/ShippingCost";
import MediaProductpage from "./pages/MediaProductpage/MediaProductpage";
import MediaProductlisting from './pages/MediaProductlisting/MediaProductlisting';

import MyCj from "./pages/MyCj";
import Sourcingpage from './pages/Sourcingpage/Sourcingpage';
import Purchaselisting from './pages/Purchaselisting/Purchaselisting'

import myinventry from './pages/myinventry/Myinventry'
import Wishlist from './pages/Wishlist/Wishlist'
import MyPhotography from './pages/MyPhotography/MyPhotography'
import ImportedOrder from './pages/ImportedOrder/ImportedOrder'
import Connection from './pages/Connection/Connection'
import Listed from './pages/Listed/Listed'
import OrderFullfillment from './pages/OrderFullfillment/OrderFullfillment'
import Dropshiporder from './pages/Dropshiporder/Dropshiporder'
import Calculation from './pages/Calculation/Calculation'
import UserProfile from './pages/UserProfile/UserProfile'
import {AboutUS} from "./pages/AboutUS/AboutUS";
import ContactUS from "./pages/ContactUS/ContactUS";
import StoreAutherizationAgreement from './pages/StoreAutherizationAgreement/StoreAutherizationAgreement';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';
import RefundResend from './pages/RefundResend/RefundResend';
import Api from './pages/Api/Api' 
import IntegrityConcerns from "./pages/IntegrityConcerns/IntegrityConcerns";
import UserAgreement from "./pages/UserAgreement/UserAgreement"
import BulkPuchase from "./pages/BulkPurchase/BulkPuchase";
import Supplier from './pages/Supplier/Supplier'
import ProductSourching from './pages/ProductSourching/ProductSourching'
import Blog from './pages/Blog/Blog';
import Ticket from './pages/Ticket/Ticket'
import ProductReport from './pages/ProductReport/ProductReport'
import ProductPhotography from './pages/ProductPhotography/ProductPhotography'
import Afflicate from "./pages/Afflicate/Afflicate";

import BulkPurchase from './pages/BulkPurchase/BulkPuchase';
import Disputes from "./pages/Disputes/Disputes";
import Disputeslist from'./pages/Disputeslist/Disputeslist'
import UndeleviredOrder from "./pages/UndeleviredOrder/UndeleviredOrder";
import OrderTracking from "./pages/OrdersTracking/OrderTracking";
import PurchaseCart from "./pages/PurchaseCart/PurchaseCart";
import SkuList from "./pages/SkuList/SkuList";
import ServiceProduct from "./pages/ServiceProduct/ServiceProduct";


function App() {
  const userInfo = localStorage.getItem("userInfo");
 
 // alert()
  return (
    <>
     {/* <Navbar />*/}
     
      <Switch>

      
        <Route path="/" exact component={Home} />
     
        
        <Route path="/annual" component={AnnualReport} />
       
        <Route path="/HelpCenter" component={Blogs} />
        <Route path="/signin" component={signin} />
      
        <Route path="/Signup" component={Signup} />
        <Route path="/catagories" component={catagories} />
        <Route path="/MyCj" component={MyCj} />
        <Route path="/ProductListing" component={ProductListing} />
        <Route path="/ProductPage/:id" component={ProductPage} />
        <Route path="/ShippingCost" component={ShippingCost} />
        <Route path="/MediaProductpage" component={MediaProductpage} />
        <Route path="/MediaProductlisting" component={MediaProductlisting} />
    
        <Route path="/Sourcingpage" component={Sourcingpage} />
        <Route path="/Purchaselisting" component={Purchaselisting} />
    
        <Route path="/myinventry" component={myinventry} />
        <Route path="/Wishlist" component={Wishlist} />
        <Route path="/MyPhotography" component={MyPhotography} />
        <Route path="/ImportedOrder" component={ImportedOrder} />
        <Route path="/Connection" component={Connection} />
        <Route path="/Listed" component={Listed} />
        <Route path="/OrderFullfillment" component={OrderFullfillment} />
        <Route path="/Dropshiporder" component={Dropshiporder} />
        <Route path="/Calculation" component={Calculation} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/AboutUS" component={AboutUS} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/PaymentMethods" component={PaymentMethods} />
        <Route path="/Api" component={Api} />
        <Route path="/RefundResend" component={RefundResend} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/StoreAutherizationAgreement" component={StoreAutherizationAgreement}></Route>
        <Route path="/IntegrityConcerns" component={IntegrityConcerns}></Route>
        <Route path="/UserAgreement" component={UserAgreement}></Route>
        <Route path='/BulkPuchase' component={BulkPuchase}></Route>
        <Route path='/Supplier' component={Supplier}></Route>
        <Route path='/ProductSourching' component={ProductSourching}></Route>
        <Route path='/Blog' component={Blog}></Route>
        <Route path="/Ticket" component={Ticket}></Route>
        <Route path="/ProductReport" component={ProductReport}></Route>
        <Route path="/ProductPhotography" component={ProductPhotography}></Route>
        <Route path="/Afflicate" component={Afflicate}></Route>
       
        <Route path='/BulkPurchase' component={BulkPurchase}></Route>
        <Route path='/Disputes' component={Disputes}></Route>
        <Route path="/Disputeslist" component={Disputeslist}></Route>
        <Route path="/UndeleviredOrder" component={UndeleviredOrder}></Route>
        <Route path="/OrderTracking" component={OrderTracking}></Route>
        <Route path="/PurchaseCart" component={PurchaseCart}></Route>
        <Route path="/SkuList" component={SkuList}></Route>
        <Route path="/ServiceProduct" component={ServiceProduct}></Route>
      </Switch>
     
 
    </>
  );
}

export default App;
