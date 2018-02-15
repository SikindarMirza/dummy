import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
require('../../scss/style.scss');
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={values:[{key:"",index:0},{key:"",index:1},{key:"",index:2}]};
  }
   
  renderInputs(){
   
    const inputStyle = {
      position:'relative',
      margin_top:'10px',    
      width:'300px',
      padding: '10px'
    };
   
   console.log(this.props)
 
    return _.map(this.props.placeholders,placeholder =>{
     let type="";
      // console.log("d")
      // console.log(this.props.values);
      //console.log(placeholder.index)
      if(this.props.shouldUsePassword)
       (placeholder.index===0? type="text":type="password")
      else
        type="text";
      // if(placeholder.index===1 || placeholder.index===2)
      // {
      //   console.log("...km,m.")
      //    const type=this.props.type;
      // }
      // else
      // {
      //   console.log(";;;;..")
      //    const type="text";
      // }
      console.log(type);
       
      return(
      <input className="input" key={placeholder.index} placeholder={placeholder.key} 
      value={this.props.values[placeholder.index].key}
      onChange={event=>{
          switch(placeholder.index)
          {
          case 0:
          this.onInputChange(0,event.target.value);
          break;
          case 1:
           this.onInputChange(1,event.target.value);
           break;
          case 2:
            this.onInputChange(2,event.target.value);
            break;
          }
      }}/> 
      )
    });
  } 

  onInputChange(i,value){
    const values=[];
 //   console.log(this.props.values)
    
      _.map(this.props.values,value => {
        values.push(value);
  })

     console.log(values)
     values[i].key=value;
    // this.setState({values});
     //console.log(this.props);
    // console.log(this.state.values)
    console.log("reachded")
     this.props.setStateForThisComp(values);

   
  }

  render(){
    const divStyle = {
      margin: '40px',
      width:'100px'
    }; 
  
  //  console.log(this.props)
  return(
    <div>
      {this.renderInputs()}
    </div>
    
  )
}
}
