import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <BrowserRouter>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile"> Profile</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary> */}

      {/* <PostList /> */}

      {/* <Example1 /> */}
      {/* <Example2 /> */}
      <Example3 />
    </div>
  );
}

export default App;
