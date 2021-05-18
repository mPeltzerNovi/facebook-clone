import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import {useStateValue} from "./StateProvider";


function App() {
    //Google Authentication toevoegen ->Ook weer goede oefening voor pagina's maken tussen profile- en login-page
    //User mogelijkheid aanmaken
    //const user = null; //*null* geeft dan dus login; "Martin" geeft dan de profile-page. Dit nu vervangen door onderstaande
    const [{ user }, dispatch] = useStateValue();

  return (
      //BEM naming convention; hoofdletter A in classname="App" naar kleine letter "a".
      //-->Als er geen user is dan kom je op de login-pagina
    <div className="app">
        { !user ? (
            <Login />
        ) : (
            <>
                <Header />

                <div className="app_body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            </>
        )}



    </div>
  );
}

export default App;
