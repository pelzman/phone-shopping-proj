import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal'
import Default from './components/Default';

import './App.css';

class App extends Component {
  render(){
    return (
    <> 
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}/>
     <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      
      <Route component={Default}/>
    </Switch>
       <Modal/>
   </>
  );
  }

}

export default App;
