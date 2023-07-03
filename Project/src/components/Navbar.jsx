import { useEffect } from 'react'
import { useState } from 'react'
import './Navbar.css'
import Lists from './Lists';
function Navbar() {
    const handleResize = () => {
        if(window.innerWidth >=750)
        {
            setShowMenu(false);
        }
        setMinWidth(window.innerWidth < 750);
      };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
      }, []);
    function expand()
    {
        setShowMenu(!showMenu);
    }
    const [showMenu,setShowMenu] = useState(false);
    const [minWidth,setMinWidth] =useState(window.innerWidth<750);
    return (
        <nav className="largeScreenNav" style={{backgroundColor: "#090B0C"}}>
            <div className="navbar m-0">
                <h1 className="text-white">L O G O</h1>
                {minWidth?
                <button className="toggleBtn text-center p-0" id="toggleBtnId">
                    {!showMenu?
                    (<i onClick={expand} id="bars" className="fa-solid fa-bars m-0 mt-auto" style={{color: "#DB435C", fontSize: "40px"}}></i>)
                    :
                    (<i onClick={expand} id="cross" className="fa-solid fa-xmark m-0 mt-auto " style={{color: "#DB435C" ,fontSize: "40px"}}></i>)
                    }
                </button>
                :null}
            </div>
            <Lists addClass={showMenu}/>
        </nav>
    )
}
export default Navbar