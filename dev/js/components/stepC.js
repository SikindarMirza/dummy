import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './app';

export  class StepC extends Component{
    render(){
        return(
          <div>
            <App placeholders={[{index:0,key:"details"},{key:"details",index:1},{key:"details",index:2}]}
                 values={this.props.stepCData}
                 />
            <Link to="/stepb" className='btn btn-danger'>
              Back 
            </Link>    
          </div>
        ) 

    }
}
function mapStateToProps(state){
  return {
       stepCData:state.stepCData
  }
}
export default connect(mapStateToProps)(StepC);