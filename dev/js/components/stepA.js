import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './app';

export  class StepA extends Component{
     constructor(props)
     {
       super(props);
      // console.log(props)
     }
    render(){
        return(
          <div className="form">
            <App placeholders={[{index:0,key:"account"},{key:"account",index:1},{key:"account",index:2}]}
                values={this.props.stepAData}
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
export default connect(mapStateToProps)(StepA);

