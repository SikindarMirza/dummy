import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import App from './components/app';
import Stepa from './components/step1';
import Stepb from './components/step2';
import Stepc from './components/step3';
import GlobalApp from './components/globalApp';




const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <App placeholders={[{index:0,key:"Hello"},{key:"World",index:1},{key:"buddy",index:2}]}/>
  <BrowserRouter>
    <div>    
      <Switch>   
        <Route path="/stepb" component={Stepb} />
        <Route path="/stepc" component={Stepc} />
        <Route path="/"  component={Stepa} /> 
      </Switch>
    </div> 

 </BrowserRouter>
  , document.querySelector('.container'));
