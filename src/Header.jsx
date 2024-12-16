import React, {useContext} from "react";
import { AppContext } from "./App";
import twitterLogo from "./assets/logo-black.png";



const Header = () => {
    const {user, theme, setTheme} = useContext(AppContext);

    const toggleTheme = () => {
      setTheme(theme === "light"? "dark" : "light")
    }
    



    return (
        <header className="header" >
            <div className="header__logo">
                <img src= {twitterLogo} width={36}  height={36} alt="twitterlogo" />
            </div>
            {/* <h1>Twitter Clone</h1> */}
            <div className="header__search">
                <input type="text" placeholder="Search" />
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            
        </header>
    );
};
export default Header;