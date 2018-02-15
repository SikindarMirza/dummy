import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import App from './app';

export default class Stepb extends Component{
    render(){
        return(
          <div>
            <App placeholders={[{index:0,key:"social"},{key:"social",index:1},{key:"social",index:2}]}/>
            <Link to="/stepc" className='btn btn primary'>
              Next
            </Link> 
            <Link to="/" className='btn btn primary'>
              Back
            </Link>     
          </div>
        ) 

    }
}
