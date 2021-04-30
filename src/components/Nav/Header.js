import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import styles from "./Header.module.css";
import {AuthContext} from "../../authContext"

const Header = () => {
    const {state, dispatch} = React.useContext(AuthContext);
    const logout = (e) => {
    dispatch({
        type: "LOGOUT",
        user: null,
        token: null
    });
    localStorage.clear();
    window.location.href="/";
}

    return(
        <div>

            <nav className={styles.nav}>
            
                <span>
                {(state.user) ?"Hi" :""} {state.user}  
                </span>
                <span> </span>
                <span>
                    <a href="#" onClick={logout}>
                    {(state.user) ?"Log out" :""} 
                    </a>
                </span>
                {/* <div> Token: {localStorage.getItem('token')} </div> */}
            
           </nav>
        </div>
        
        )


}
export default Header;
