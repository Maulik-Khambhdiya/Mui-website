import './App.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
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
import Header1 from './admin/Header1';
import CreateForm from './pages/CreateForm';
import NavigationMenu from './admin/NavigationMenu';
import ItemList from './admin/ItemList';
import BestsellerProduct from './admin/Page\'s CSS/BestsellerProduct';
import ModernFurniture from './pages/ModernFurniture';
import ClassicFurniture from './pages/ClassicFurniture';
import RusticFurniture from './pages/RusticFurniture';
import Modern_Furniture from './admin/Modern_Furniture';



const App = () => {

  return (
    <>
      <Router>

        {/* <Header /> */}

        <Switch>

          {/* ============Website Router start================ */}

          {/* <Route exact path='/'>
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

          <Route path='/customerStory'>
            <CustomerStories />
          </Route>

          <Route path='/event'>
            <EventPage />
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
          </Route> */}

          {/* ============Website Router end================ */}



          {/* ----------------------------------------------------------- */}

          {/* <Route path='/admin'>
            <Admin />
          </Route> */}

          {/* ----------------------------------------------------------- */}



            {/* ==============DashBoard Router start=============== */}

          <Route exact path='/'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/offersection'>
            <Header1></Header1>
          </Route>

          <Route path='/navmenu'>
            <NavigationMenu></NavigationMenu>
          </Route>

          <Route path='/itemlist'>
            <ItemList></ItemList>
          </Route>

          <Route path='/moderndesign'>
            <Modern_Furniture></Modern_Furniture>
          </Route>



          <Route path='/bestsellerproduct'>
            <BestsellerProduct></BestsellerProduct>
          </Route>

          {/* ==============DashBoard Router end=============== */}


        </Switch>


        {/* <Footer /> */}

      </Router>





    </>
  )
}


export default App

