import React from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects/Projects';
import Blogs from './components/Blogs/Blogs/Blogs';
import About from './components/About/About/About';
import Contact from './components/Contact/Contact/Contact';
import Resume from './components/Resume/Resume/Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
