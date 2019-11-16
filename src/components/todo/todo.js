import React from 'react';
import './todo.css';
import { Layout } from 'element-react/next'

const Todo = (props) => {
   return (
      <Layout.Row className="Todo">
         <div onClick={props.deletedTodo}>
            {props.name}
         </div>
      </Layout.Row>
   );
};

export default Todo;
