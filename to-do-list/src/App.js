import React, { Component } from 'react';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(){
    super()
    this.state={
      todos
    }
    this.hadleAddTodo=this.hadleAddTodo.bind(this)
  }

  hadleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  handleDelete(index){
console.log(index);

    this.setState({
      todos: this.state.todos.filter((elm,i)=>i !== index)
    })
    
   
  }
  render() {
    const todos = this.state.todos.map((elm, i)=>{
      return (
        <div >
        {elm.text}
        <button type="button" className="btn btn-outline-danger" onClick={this.handleDelete.bind(this,i)}>Eliminar</button>
        </div>
        
      )
    })
    
    return (
      <div className="App">   
          
        <TodoForm onAddTodo={this.hadleAddTodo}/>
        <div>
         {todos}
        
        </div>
      </div>
    );
  }
}

export default App;
