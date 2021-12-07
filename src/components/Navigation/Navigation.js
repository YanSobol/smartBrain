import React from 'react';
import "./Navigation.css"

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p
                onClick={() => onRouteChange('signout')}
                className="f5 link dim black pa2 pointer">Signout</p>
            </nav>
        );
    }else {
        return (
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p
                    onClick={() => onRouteChange('signin')}
                    className="f5 link dim black pa2 pointer">Signin</p>
                    <p
                    onClick={() => onRouteChange('register')}
                    className="f5 link dim black pa2 pointer">Register</p>
                </nav>
            </div>
        );
    }
    
}
export default Navigation;