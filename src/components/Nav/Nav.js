import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import styles from "./Header.module.css"
import {ThemeContext} from "../ThemeContext"
export function Nav(){
//     const [theme, setTheme] = useContext (ThemeContext);
// const handleTheme = () => {
//     setTheme(theme === "black"?"blue":"black");
// }
    return(
        <nav>
  <ul>
                <li>
                    <Link to= "/" >
                        Main
                    </Link>
                </li>
                <li>
                    <Link to= "/About" >
                        About
                    </Link>
                </li>
                <li>
                    <Link to= "/products" >
                        Products
                    </Link>
                </li>
                 <li>
                    <Link to= "/Blog/1" >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to= "/Blog/2" >
                        BLog
                    </Link>
                </li>
            </ul>
        </nav>
        
         /* <nav className={[styles.nav, theme=== "black" ?styles.black :styles.blue,].join(" ")}> */
            /* <button onClick={handleTheme}>
                change theme
            </button> */
             
        
    )
}