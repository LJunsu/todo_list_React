import { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

// https://velopert.com/3480

class App extends Component {
  id = 3;

  state = {
    input : ""
    , todos : [
      {id : 0, text : "리액트 소개", checked : false, color : "#343a40"}
      , {id : 1, text : "리액트 소개", checked : true, color : "#343a40"}
      , {id : 2, text : "리액트 소개", checked : false, color : "#343a40"}
    ]
    , color : "#343a40"
    , colors : ['#343a40', '#f03e3e', '#12b886', '#228ae6']
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input : ""
      , todos : todos.concat({
        id : this.id++
        , text : input
        , checked : false
        , color : this.state.color
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === "Enter") {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos]; // ...todos -> 전개 구문(spread syntax)

    nextTodos[index] = {
      ...selected
      , checked : !selected.checked
    }

    this.setState({
      todos : nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  colorChange = (select_color) => {
    this.setState({
      color : select_color
    })
  }

  render() {
    const { input, color, todos, colors } = this.state;
    const {
      handleChange
      , handleCreate
      , handleKeyPress
      , handleToggle
      , handleRemove
      , colorChange
    } = this;

    return(
      <TodoListTemplate 
        form = {<Form 
          value = {input} 
          onKeyPress = {handleKeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
          color = {color}
        />}
        palette = {<Palette
          color = {color}
          colors = {colors}
          colorChange = {colorChange}
        />}
      >
        <TodoItemList 
          todos = {todos} 
          onToggle = {handleToggle}
          onRemove = {handleRemove}
        />
      </TodoListTemplate>
    )
  }
}

export default App;