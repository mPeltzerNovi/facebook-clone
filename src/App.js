import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";


function App() {
  return (
      //BEM naming convention; hoofdletter A in classname="App" naar kleine letter "a".
    <div className="app">
        <Header />

        <div className="app_body">
            <Sidebar />
            <Feed />
            {/* Feed */}
            {/* Widgets not used */}
        </div>


    </div>
  );
}

export default App;
