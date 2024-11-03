import React from "react";
import css from './App.module.css';
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarSimple />
      <Sidebar /> 
      <div className="App">
    <StatefulGreeting name="Mike"/>
  </div>

    </div>
    
  );
}

export default App;