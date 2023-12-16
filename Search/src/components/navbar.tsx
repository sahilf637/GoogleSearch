import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
    return (
        <div className="navbar">
            <div><div><a href="">Gmail</a></div>
            <div><a href="">Images</a></div></div>
            <div id="Tool"><PiDotsNineBold/></div>
            <div id="Tool"><div id="Sync">S</div></div>
        </div>
    )
}

export default Navbar;