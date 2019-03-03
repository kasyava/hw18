import React, { Component } from 'react';

import './App.css';

import ToDoList from "./componets/ToDoList/ToDoList"

import ToDoForm from './componets/ToDoForm/ToDoForm'


class App extends Component {

  state = {

    todoItems:[
      {index: 1, value: "learn react", done: false},
      {index: 2, value: "Go shopping", done: true},
      {index: 3, value: "buy flowers", done: true}
    ],
    newItem: 'add a new todo...'
  };

  addItem = (e) =>{
    e.preventDefault();
    let todoItems = [...this.state.todoItems];
    todoItems.push({index: todoItems.length+1, value:this.state.newItem, done:false});
    this.setState({todoItems});
    console.log(todoItems);
  };

  deleteItem = (id) =>{
    let todoItems = [...this.state.todoItems];
    todoItems.splice(id, 1);
    this.setState({todoItems});
  };


  changeValue = (value) =>{
    let newItem = this.state.newItem;
    newItem = value;
    this.setState({newItem});
  };


  render() {
    const showList = () =>{

      return this.state.todoItems.map((item, id) => {
        return <ToDoList
            key={id}
            index = {item.index}
            value={item.value}
            done={item.done}
            deleteItem={() => this.deleteItem(id)}
        />
      });

      };


    return (
      <div className="App">
        {showList()}

        <ToDoForm
            sendItem={(e)=>this.addItem(e)}
            changeTask={(e)=>this.changeValue(e.target.value)}
            value={this.state.newItem}
        />
      </div>
    );
  }
}

export default App;
