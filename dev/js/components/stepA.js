import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForA} from '../actions/index';
import App from './app';

export  class StepA extends Component{
     constructor(props)
     {
       super(props);
      // console.log(props)
     }
    render(){
        return(
          <div>
            <App placeholders={[{index:0,key:"account"},{key:"account",index:1},{key:"account",index:2}]}
                values={this.props.stepAData}
                setStateForThisComp={this.props.setAppLevelStateForA}
                shouldUsePassword={true}
               
                 />
            <Link to="/stepb" className='btn btn-primary'>
              Next
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

