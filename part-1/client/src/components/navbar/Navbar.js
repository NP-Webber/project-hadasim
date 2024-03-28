import { MdLocalHospital, MdSearch } from "react-icons/md"
import "./navbar.css"

const Navbar = () => {
    return (

        <div className="navbar">
            <div className="navbar-title">
               <h1><MdLocalHospital/>קופת חולים</h1>
            </div>
            <div className="navbar-menu">
                <div className="navbar-search">
                    <MdSearch />
                    <input type="text" placeholder="Search..." className="navbar-input" />
                </div>
            </div>
        </div>
    )
}

export default Navbar