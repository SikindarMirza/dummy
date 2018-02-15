import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import App from './app';

export default class Stepc extends Component{
    render(){
        return(
          <div>
            <App placeholders={[{index:0,key:"details"},{key:"details",index:1},{key:"details",index:2}]}/>
            <Link to="/stepb" className='btn btn primary'>
              Back 
            </Link>    
          </div>
        ) 

    }
}
