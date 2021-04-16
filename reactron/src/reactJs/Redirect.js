import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Redirect = () => {
   let history = useHistory();

   useEffect(() => {
      history.push("/");
   }, []);
   return null;
};

export default Redirect;
