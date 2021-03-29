import React from 'react';
import './App.css';
import Header from "./Header";

function App() {
  return (
      //BEM naming convention; hoofdletter A in classname="App" naar kleine letter "a".
    <div className="app">
        <Header />

        {/* App body */}
        {/* Sidebar not used */}
        {/* Feed */}
        {/* Widgets not used */}
    </div>
  );
}

export default App;
