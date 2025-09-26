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



const App = () => {

  return (
    <>
      <Router>

        {/* <Header /> */}

        <Switch>

          {/* <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/createform'>
            <CreateForm />
          </Route>

          <Route path='/furniture'>
            <Furniture />
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

          {/* ----------------------------------------------------------- */}
          {/* <Route path='/admin'>
            <Admin />
          </Route> */}

          {/* ----------------------------------------------------------- */}


          <Route exact path='/'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/offerheader'>
            <Header1></Header1>
          </Route>




        </Switch>


        {/* <Footer /> */}

      </Router>





    </>
  )
}


export default App

