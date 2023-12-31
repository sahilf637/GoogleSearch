import { PiDotsNineBold } from "react-icons/pi";
import React, { useState } from "react";
import Gapps from "./Gapps";

const Navbar: React.FC = () => {                            //NavBar for page
    const [showApps, setShowApps] = useState(false);

    const toggleManu = () => {                              //Toggles the showApps
        setShowApps(!showApps)
    }
    
    return (
        <div className="navbar">
            <div><div><a href="">Gmail</a></div>
            <div><a href="">Images</a></div></div>
            <div id="Tool" onClick={toggleManu}><PiDotsNineBold/></div>
            <div id="Tool"><div id="Sync">S</div></div>
            {showApps &&
            (<Gapps
            showApps={showApps}
            setShowApps={setShowApps}
            />)}
        </div>
    )
}

export default Navbar;