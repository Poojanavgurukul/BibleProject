import './App.css';
import { Component } from 'react';
import TodoList from './component/Todo/list';

class App extends Component{
  state = {
    todos:[
      { id:1,content:'Learn Redux' },
      { id:2,content:'daily Update' }
    ]
  }
  deleteTodo=(id)=>{
    console.log(id,'I have id')
    const todos=this.state.todos.filter((todo)=>{
      return todo.id !== id
    });
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
    </div>
    </div>
  );
}
}

export default App;
