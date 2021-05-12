import { Route, Switch, Link } from "react-router-dom";
import React from "react";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
   return (
      <>
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
      </>
   );
};

export default App;
