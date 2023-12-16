import { useState, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";


const Search = () => {
    const [input, setInput] = useState("");

    const handleChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value)
        event.target.style.height = "auto";
        event.target.style.height = `${event.target.scrollHeight}px`;
    }
    return <div className="gtop">
        <div>
            <div className="Search">
                <div className="icon">
                    <IoIosSearch/>
                </div>
                <div className = "Sbar">
                    <textarea
                    value={input}
                    onChange={handleChange}
                    rows={1}
                    />
                </div>
                <div className="image">
                    <img src="voice.png" alt="" />
                </div>
                <div className="image">
                    <img src="lense.png" alt="" />
                </div>
            </div>
        </div>
        <div>
            <div className="Buttonbox">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
        </div>
    </div>
}

export default Search