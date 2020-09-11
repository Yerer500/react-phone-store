import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detalis from './components/Detalis';
import Cart from './components/Cart';
import Default from './components/Default';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detalis" component={Detalis} />
        <Route path="/Cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;