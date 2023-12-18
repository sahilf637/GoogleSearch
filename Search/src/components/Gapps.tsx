import React, { useEffect, useRef } from "react";


interface ChildProps {                                                                      //Defines the types of Props in Typescript
    showApps: Boolean,
    setShowApps: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gapps:React.FC<ChildProps> = ({showApps, setShowApps}) => {                            //Google Apps section 

    const dropdownRef = useRef<HTMLDivElement>(null);                                        // Create a reference to the DOM Element to be displayed
    useEffect(() => {
        const handleOutsideClick: EventListener = (event) => {                               //handle the clicking of outside appbar
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowApps(!showApps);
          }
        };
    
          document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
    return <div className="apps" ref={dropdownRef}>
        <div className="app"><div><img src="./Apps/search.png" alt="search" /></div><div>Search</div></div>
        <div className="app"><div><img src="./Apps/maps.png" alt="maps" /></div><div>Maps</div></div>
        <div className="app"><div><img src="./Apps/youtube.png" alt="youtube"/></div><div>Youtube</div></div>
        <div className="app"><div><img src="./Apps/playstore.png" alt="playstore" /></div><div>Play</div></div>
        <div className="app"><div><img src="./Apps/doc.png" alt="news" /></div><div>News</div></div>
        <div className="app"><div><img src="./Apps/meet.png" alt="meet" /></div><div>Meet</div></div>
        <div className="app"><div><img src="./Apps/drive.png" alt="drive" /></div><div>Drive</div></div>
        <div className="app"><div><img src="./Apps/photos.png" alt="photos" /></div><div>Photos</div></div>
        <div className="app"><div><img src="./Apps/app.png" alt="apps" /></div><div>Apps</div></div>
        <div className="app"><div><img src="./Apps/calender.png" alt="apps" /></div><div>Calender</div></div>
    </div>
}

export default Gapps