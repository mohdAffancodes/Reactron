import React from "react";

const App = () => {
   return (
      <>
         <h1>Hello Reactron From Electron Forge</h1>
         <button
            onClick={() => {
               alert("Hello World!");
            }}
         >
            Click Me
         </button>
      </>
   );
};

export default App;
