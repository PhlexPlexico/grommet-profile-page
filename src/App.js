import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};
export default App;
