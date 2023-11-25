// client/src/App.js
import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
    inputValue: "",
  };

  componentDidMount() {
    this.fetchHelloMessage();
  }

  fetchHelloMessage = async () => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error("Error fetching hello message:", error);
    }
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });
      const data = await response.json();
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
