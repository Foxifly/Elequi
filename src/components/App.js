import React from 'react';
import Nav from "./Nav"
import Quote from "./Quote";
import Contact from "./Contact";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";

import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={Quote} />


      </header>


    </div>
  );
}

export default App;
