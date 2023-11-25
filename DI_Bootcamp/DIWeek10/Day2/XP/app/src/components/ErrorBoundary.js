import { Component, useState } from "react";
import React from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.error("Error caught by ErrorBoundary:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Error has occured</h2>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
