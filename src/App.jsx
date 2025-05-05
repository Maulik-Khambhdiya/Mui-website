import './App.css';
import React from 'react'
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

const App = () => {

  return (
    <>
      <Router>

        <Header />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/furniture'>
            <Furniture />
          </Route>

        </Switch>


        <Footer />

      </Router>


    </>
  )
}


export default App

