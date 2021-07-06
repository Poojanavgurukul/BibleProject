import './App.css';
import TodoList from './component/Todo/list';
import TodoForm from './component/Todo/Addform';
import { Component } from 'react';


class App extends Component{
  state = {
    todos:[
      { id:1,content:'Learn Redux' },
      { id:2,content:'daily Update' }
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter((todo)=>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo=(todo)=>{
    todo.id= this.state.todos.length+1
    let todos= [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render(){
  return (
    <div>
      <h1 className="center blue-text">Todo's</h1>
      <div className="todo-app container">
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <TodoForm  addTodo={this.addTodo}/>
    </div>
    </div>
  );
}
}

export default App;
