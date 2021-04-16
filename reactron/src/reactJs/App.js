import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Redirect from "./Redirect";

const App = () => {
   return (
      <>
         <Router>
            <Redirect />
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route exact path="/about">
                  <About />
               </Route>
            </Switch>
         </Router>
      </>
   );
};

export default App;
