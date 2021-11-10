import React, { useState,useEffect } from "react"
import facade from "./apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./Login";
 

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { facade.logout()
    setLoggedIn(false) } 
  const login = (user, pass) => {facade.login(user,pass)
    .then(res =>setLoggedIn(true));} 
 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
 
}
export default App;
