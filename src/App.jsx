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

const App = () => {

  return (
    <>
      <Router>

        <Header />

        <Switch>

          <Route exact path='/new'>
            <Home />
          </Route>

          <Route path='/furniture'>
            <Furniture />
          </Route>

          <Route path='/lighting'>
            <Lighting />
          </Route>

          <Route path='/our-story'>
            <Story />
          </Route>

        </Switch>


        <Footer />

      </Router>


    </>
  )
}


export default App

