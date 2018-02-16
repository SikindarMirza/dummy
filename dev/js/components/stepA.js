import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForA} from '../actions/index';
import App from './app';

export  class StepA extends Component{
     constructor(props)
     {
       super(props);
     }
    render(){

        return(
          <div className="form">
            <h5>CREATE YOUR ACCOUNT</h5>
            <App placeholders={[{index:0,key:"Email"},{key:"Password",index:1},{key:"Confirm Password",index:2}]}
                values={this.props.stepAData}
                setStateForThisComp={this.props.setAppLevelStateForA}
                shouldUsePassword={true}
            />
              <Link to="/stepb">
              <button className="button">Next</button>
            </Link>    
          </div>
        ) 

    }
}

function mapStateToProps(state){
  return {
       stepAData:state.stepAData
  }
}
export default connect(mapStateToProps,{setAppLevelStateForA})(StepA);

