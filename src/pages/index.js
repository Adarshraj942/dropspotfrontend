import React, { useState } from "react";

import Shopnavbar from "../components/ShopNavbar/Shopnavbar";
import Link from "../components/Links/Link";

import Trending from "../components/Trending/Trending";
import TrendingHeader from "../components/Trending/TrendingHeader";
import Shipping from "../components/Shipping/Shipping";

import Section from '../components/Section/Section'
import Review from "../components/Reviews/Review";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Partner from "../components/Partner/Partner";
import Vender from '../components/Vender/Vender'
import MediaNavbar from "../components/MediaNavbar/MediaNavbar";
import MediaProducts from '../components/MediaProducts/MediaProducts'
import Hotsellingproducts from '../components/Hotsellingproducts/Hotsellingproducts'
import MediaFooter from "../components/MediaFooter/MediaFooter";
import Mediabutton from '../components/Mediabutton/Mediabutton'
import Mediabuttonbanner from '../components/Mediabuttonbanner/Mediabuttonbanner'
import MediaNavabarbutton from "../components/MediaNavabarbutton/MediaNavabarbutton";
import MediaCatogryButton from '../components/MediaCatogryButton/MediaCatogryButton'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton';
import ShoppingCard from '../components/ShoppingCard/ShoppingCard';







const Home = () => {
  const [category, setCategory] = useState("");
  const [products, setProduct] = useState([1, 2, 3, 4, 5]);







  return (
    <div>
    <Navbar />
    
      <MediaNavbar />
      <Shopnavbar />
    
    
      <Section />
  
      <br />
      <MediaNavabarbutton />
     
      <br />
      <Mediabutton/>
      <br />
     
      <Mediabuttonbanner />
     
      <MediaCatogryButton />
      <Link />
      <br />
     
      <br />

      <MediaProducts/> 
      <br />
      <Hotsellingproducts />
      <TrendingHeader />
      <Trending products={products} />
    

    
      <br />
    
   
    
      <br />
      <Partner />
      <br />
      <ShoppingCard />
      <br />
      <Review />
      <br />
      <Vender />
      <br />
      <MediaFooter />
      <Footer/>
      <ScrollUpButton />
     
      

   
      
    </div>
    
  );
};

export default Home;
