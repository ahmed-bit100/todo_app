import "./App.css";

import React, { Component } from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

export default class App extends Component {
  state = {
    tasks: [
      { id: 0, action: "wake up", isDone: true },
      { id: 1, action: "have coffee", isDone: false },
    ],
  };
  // deleting tasks from the list
  handleDelete = (index) =>
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== index) });
  // handling your finished/unfinished tasks
  handleComplete = (index) =>
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === index ? { ...el, isDone: !el.isDone } : el
      ),
    });

  // adding tasks to the list
  handleAdd = (text) => {
    const newTask = {
      id: this.state.tasks.length,
      action: text,
      isDone: false,
    };
    text.trim()
      ? this.setState({ tasks: [...this.state.tasks, newTask] })
      : alert("please enter a task");
    this.setState({ newText: "" });
  };
  render() {
    return (
      <div className="title">
        <AddTask handleAdd={this.handleAdd} />
        <TaskList
          tasks={this.state.tasks}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
