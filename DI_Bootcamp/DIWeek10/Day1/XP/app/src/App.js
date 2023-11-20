import logo from "./logo.svg";
// import "./App.css";
import { useState, Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    if (this.state.counter > 4) {
      throw new Error();
      return;
    }
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <button onError={this.props.onError} onClick={this.handleClick}>
          Counter+
        </button>
      </div>
    );
  }
}

const App = () => {
  const handleError = (error, errorInfo) => {
    console.error("Error caught by error boundary:", error, errorInfo);
  };
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter onError={handleError} />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter onError={handleError} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
