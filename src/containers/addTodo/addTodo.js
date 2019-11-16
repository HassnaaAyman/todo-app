import React, { Component } from 'react';
import { Layout, Button } from 'element-react/next';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/action'

class AddTodo extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      newTodo:{
        id: 3,
        name:'',
      }
    }
  }


  render() {
    const {newTodo} =  this.state;
    return(
      <Layout.Row>
        <input type="text" onChange={(event)=>this.setState({newTodo: {...newTodo , name:event.target.value , id:newTodo.id + 1}})}  placeholder={"Add Todo"}/>
        <Button onClick={(e)=> {e.preventDefault(); this.props.onAddTodo(this.state.newTodo)} }>Add</Button>
      </Layout.Row>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onAddTodo:(todoData)=> dispatch({type : actionTypes.ADDTODO , todoData : todoData})
  }
}
export default connect(null , mapDispatchToProps)(AddTodo);
