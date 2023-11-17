import { Component } from "react";
import "./Exercise.css";
class Exercise extends Component {
  render() {
    const h1Style = {
      color: "red",
      backgroundColor: "lightblue",
    };
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <>
        <h1 style={style_header}>Header</h1>
        <p class="para">Para</p>
        <a>Link</a>
        <form>Form</form>
        <img></img>
        <ol>
          <li>List ele</li>
        </ol>
      </>
    );
  }
}

export default Exercise;
