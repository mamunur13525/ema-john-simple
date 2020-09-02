import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Management from './Components/Management/Management';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
       <Header></Header>
    

      <Router>
        <Switch>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

         <Route path="/order">
           <Review></Review>
         </Route>

          <Route path="/manage">
            <Management></Management>
          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>

        <Route path="/product/:ProductKey">
          <ProductDetail></ProductDetail>
        </Route>


          <Route path="*">
            <h1>page not found</h1>
          </Route>


        </Switch>
      </Router>


     
    </div>
  );
}

export default App;
