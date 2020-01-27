import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './NewComponents/Home'
import Contact from './NewComponents/Contact'
import About from './NewComponents/About'
import Nav from './NewComponents/Nav'
import Projects from './NewComponents/Projects'
import './bootstrap.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/projects/:id" component={Projects}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
