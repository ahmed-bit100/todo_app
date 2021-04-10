import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    new: "",
  };
  // handling changes in the input field
  handleChange = (e) => this.setState({ new: e.target.value });
  render() {
    return (
      <div>
        <div>
          <h1> Our to do app </h1>
          <form className="frm" onSubmit={(e) => e.preventDefault()}>
            <input
              className="inp"
              type="text"
              value={this.state.new}
              onChange={this.handleChange}
            />
            <button onClick={() => this.props.handleAdd(this.state.new)}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
