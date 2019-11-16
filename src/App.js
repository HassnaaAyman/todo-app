import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import './App.css';
import TodoList from './containers/todoList/todoList';

function App() {
  return (
       <BrowserRouter>
    <div className="App">
    <div className="container">
      <Switch>
        <Route exact path="/" component={TodoList}/>
      </Switch>
    </div>
    </div>
       </BrowserRouter>
  );
}

export default App;
