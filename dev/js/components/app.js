import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={values:[]};
  }
   
  renderInputs(){
    const inputStyle = {
      position:'relative',
      margin_top:'10px',    
      width:'300px',
      padding: '10px'
    };

   
    return _.map(this.props.placeholders,placeholder =>{
      const k='onInputChange';
      return(
      <input style={inputStyle} key={placeholder.index} placeholder={placeholder.key} 
      value={this.state.values[placeholder.index]}
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
     _.map(this.state.values,value => {
           values.push(value);
     })
     values[i]=value;
     this.setState({values});
     console.log(values);
  }

  render(){
    const divStyle = {
      margin: '40px',
      width:'100px'
    }; 
  
  //  console.log(this.props)
  return(
    <div style={divStyle}>
      {this.renderInputs()}
    </div>
    
  )
}
}
