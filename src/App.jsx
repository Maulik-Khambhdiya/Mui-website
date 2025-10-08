import './App.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Furniture from './pages/Furniture';

import Lighting from './pages/Lighting';
import Story from './pages/Story';
import Decor from './pages/Decor';
import Helppage from './pages/Helppage';
import CustomerStories from './pages/CustomerStories';
import EventPage from './pages/EventPage';
import FeaturedProject from './pages/FeaturedProject';
import TermsAndConditions from './pages/TermsAndConditions';
import SitemapPage from './pages/SitemapPage ';
import ShippingAndReturns from './pages/ShippingAndReturns';
import RugsAndMats from './pages/RugsAndMats';
import Dashboard from './admin/Dashboard';
import Header1 from './admin/Offer';
import CreateForm from './pages/CreateForm';
import NavigationMenu from './admin/NavigationMenu';

import BestsellerProduct from './admin/BestsellerProduct';
import ModernFurniture from './pages/ModernFurniture';
import ClassicFurniture from './pages/ClassicFurniture';
import RusticFurniture from './pages/RusticFurniture';
import Modern_Furniture from './admin/Modern_Furniture';
import Classic_Furniture from './admin/Classic_Furniture';
import Rustic_Furniture from './admin/Rustic_Furniture';
import AppointmentPage from './pages/AppointmentPage';
import Specific_item from './admin/Specific_item';
import FurnitureManager from './admin/FurnitureManager';
import CartPage from './pages/CartPage';
import BuyNowPage from './pages/BuyNowPage';




const App = () => {

  return (
    <>
      <Router>
        <Switch>
          {/* ============ Public Routes start================ */}

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/createform'>
            <CreateForm />
          </Route>

          <Route path='/furniture'>
            <Furniture />
          </Route>

          <Route path='/modernfurniture'>
            <ModernFurniture></ModernFurniture>
          </Route>

          <Route path='/classicfurniture'>
            <ClassicFurniture></ClassicFurniture>
          </Route>

          <Route path='/rusticfurniture'>
            <RusticFurniture></RusticFurniture>
          </Route>

          <Route path='/lighting'>
            <Lighting />
          </Route>

          <Route path='/decor'>
            <Decor />
          </Route>

          <Route path='/rugsandmats'>
            <RugsAndMats />
          </Route>


          <Route path='/our-story'>
            <Story />
          </Route>

          <Route path='/helppage'>
            <Helppage />
          </Route>

          <Route path='/appointmentpage'>
            <AppointmentPage></AppointmentPage>
          </Route>

          <Route path='/customerStory'>
            <CustomerStories />
          </Route>

          <Route path='/event'>
            <EventPage />
          </Route>

          <Route path='/cartpage'>
            <CartPage></CartPage>
          </Route>

          <Route path='/buynow'>
            <BuyNowPage></BuyNowPage>
          </Route>

          <Route path='/featuredProject'>
            <FeaturedProject />
          </Route>

          <Route path='/termsandcondition'>
            <TermsAndConditions />
          </Route>

          <Route path='/sitemap'>
            <SitemapPage />
          </Route>

          <Route path='/shippingandreturn'>
            <ShippingAndReturns />
          </Route>






          {/* ============Public Routes end================ */}


          {/* ==============DashBoard Router start=============== */}


          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/offersection'>
            <Header1></Header1>
          </Route>

          <Route path='/navmenu'>
            <NavigationMenu></NavigationMenu>
          </Route>

          <Route path='/furniturecategory'>
            <FurnitureManager></FurnitureManager>
          </Route>

          <Route path='/specific_item'>
            <Specific_item></Specific_item>+
          </Route>

          <Route path='/bestsellerproduct'>
            <BestsellerProduct></BestsellerProduct>
          </Route>
        </Switch>
      </Router>



      {/* ==============DashBoard Router end=============== */}






      {/* ----------------------------------------------------------- */}

      {/* <Route path='/admin'>
            <Admin />
          </Route> */}

      {/* ----------------------------------------------------------- */}


      {/* <Route path='/moderndesign'>
            <Modern_Furniture></Modern_Furniture>
          </Route>

           <Route path='/classicdesign'>
            <Classic_Furniture></Classic_Furniture>
          </Route>

           <Route path='/rusticdesign'>
            <Rustic_Furniture></Rustic_Furniture>
          </Route> */}

    </>
  )
}


export default App

