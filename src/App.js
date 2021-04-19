import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import FunFacts from './pages/FunFacts';
import Home from './pages/Home';
import Background from './assets/personal-site-hero.jpg';

function App() {

  return (
    <Router>
      <div 
        className="App" 
        style={{height: 'fit-content', minHeight: "100vh", width: '100vw', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover"}}
      >
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/funfacts">
            <FunFacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
