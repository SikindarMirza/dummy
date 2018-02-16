import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForB} from '../actions/index';
import App from './app';

export  class StepB extends Component{
    render(){
        return(
          <div className="form">
            <h5>SOCIAL PROFILES</h5>
            <h6>Your preference on the social network</h6>
            <App placeholders={[{index:0,key:"Twitter"},{key:"Facebook",index:1},{key:"Google Plus",index:2}]}
                  values={this.props.stepBData}
                  setStateForThisComp={this.props.setAppLevelStateForB}
                  shouldUsePassword={false}
                  />
            <Link to="/">
              <button className="button">Previous</button>
            </Link>     
            <Link to="/stepc">
              <button className="button">Next</button>
            </Link> 
          </div>
        ) 

    }
}
function mapStateToProps(state){
  console.log("global b")
  console.log(state)
  return {
       stepBData:state.stepBData
  }
}
export default connect(mapStateToProps,{setAppLevelStateForB})(StepB);
