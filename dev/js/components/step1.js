import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import App from './app';

export default class Step1 extends Component{
    render(){
        return(
          <div>
            <App placeholders={[{index:0,key:"account"},{key:"account",index:1},{key:"account",index:2}]}/>
            <Link to="/stepb" className='btn btn primary'>
              Next
            </Link>    
          </div>
        ) 

    }
}
