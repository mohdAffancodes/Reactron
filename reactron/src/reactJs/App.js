import { Route, Switch, Link, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
   let history = useHistory();

   useEffect(() => {
      history.push("/");
   }, []);

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
