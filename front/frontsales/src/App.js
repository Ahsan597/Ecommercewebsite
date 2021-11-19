import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import React from "react";
import Product from './components/Product';
import Signin from './components/Signin';
import Deals from './components/Deals';
import Signup from './components/Signup';
import Useraccount from './components/Useraccount';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Ddevices from "./components/Deals/Ddevices"
import Footer from './components/Footer';
import Devices from './components/products/Devices';
import Furniture from './components/products/Furniture';
import Tools from "./components/products/Tools"
import Child from "./components/products/Child"
import Books from './components/products/Books';
import Health from "./components/products/Health";
import Toys from "./components/products/Toys";
import Phone from"./components/products/Phone"
import Sports from './components/products/Sports';
import Dsports from './components/Deals/Dsports';
import Dphone from './components/Deals/Dphone';
import Dchild from './components/Deals/Dchild';
import Dtoys from './components/Deals/Dtoys';
import Bonanza from './components/Brands/Bonanza';
import Nike from './components/Brands/Nike';
import Haier from './components/Brands/Haier';
import Profile from './components/Accounts/Profile';
import Order from './components/Accounts/Order';
import Help from './components/Accounts/Help';
import Admin from './components/Admin/Admin';

function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/product">
            <Product/>
          </Route>
          <Route exact path="/signin">
            <Signin/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/useraccount">
            <Useraccount/>
          </Route>
          <Route exact path="/deals">
            <Deals/>
          </Route>
          <Route exact path="/bonanza">
            <Bonanza/>
          </Route>
          <Route exact path="/nike">
            <Nike/>
          </Route>
          <Route exact path="/haier">
            <Haier/>
          </Route>
          <Route exact path="/device">
            <Devices/>
          </Route>
          <Route exact path="/furniture">
            <Furniture/>
          </Route>
          <Route exact path="/tools">
            <Tools/>
          </Route>
          <Route exact path="/child">
            <Child/>
          </Route>
          <Route exact path="/phone">
            <Phone/>
          </Route>
          <Route exact path="/toys">
            <Toys/>
          </Route>
          <Route exact path="/sports">
            <Sports/>
          </Route>
          <Route exact path="/health">
            <Health/>
          </Route>
          <Route exact path="/books">
            <Books/>
          </Route>
          <Route exact path="/ddevice">
            <Ddevices/>
          </Route>
          <Route exact path="/dphone">
            <Dphone/>
          </Route>
          <Route exact path="/dsports">
            <Dsports/>
          </Route>
          <Route exact path="/dchild">
            <Dchild/>
          </Route>
          <Route exact path="/dtoys">
            <Dtoys/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/order">
            <Order/>
          </Route>
          <Route exact path="/help">
            <Help/>
          </Route>
          <Route exact path="/Admin">
            <Admin/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
