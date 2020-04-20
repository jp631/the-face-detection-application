import React from 'react';
import "./nav.css";


const Navigation = ({onRouteChange, isSignIn}) => {
    if(isSignIn){
      return(
            <nav className="navigation" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange("signOut")} className='f3 link dim black underline pa3 pointer navigation'>Sign Out</p>
            </nav>
     )
  }else{
    return(
          <nav className="navigation" style={{display: 'flex', justifyContent: 'flex-end'}}>
              <p onClick = {() => onRouteChange("signIn")} className='f3 link dim black underline pa3 pointer navigation'>Sign in</p>
              <p onClick = {() => onRouteChange("register")} className='f3 link dim black underline pa3 pointer navigation'>Register</p>
          </nav>
    )
  }

}

export default Navigation;
