import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


const Search = () => {
    return <div className="gtop">
        <div>
            <div className="Search">
                <div><IoIosSearch/></div>
                <div className = "Sbar">
                    <input type="text" />
                </div>
                <div><img src="voice.png" alt="" /></div>
                <div><img src="lense.png" alt="" /></div>
            </div>
        </div>
        <div>

        </div>
    </div>
}

export default Search