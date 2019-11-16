import React, { Component } from 'react';
import Todo from '../../components/todo/todo';
import AddTodo from '../addTodo/addTodo';
import {connect} from "react-redux"
import * as actionTypes from '../../store/action'

class TodoList extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      todoList:[]
    }
  }
  render() {

    const todos = this.props.todoList.map((todo , index)=>(
       <Todo
         key={index}
         id={todo.id}
         name={todo.name}
         deletedTodo = {()=>this.props.onDeleteTodo(index)}
       />
    ));
    return( 
      <div className="TodoList">
        <AddTodo/>
        {todos}
     </div>
    )
  }
}

const mapStateToProps = (state)=>{
return{
  todoList : state.todos
}
}

const mapDispatchToProps = (dispach)=>{
  return{
     onDeleteTodo : (index)=>dispach({type: actionTypes.DELETETODO , todoData: index })
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(TodoList);
