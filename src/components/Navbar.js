import {NavLink} from 'react-router-dom'

function Navbar() {


    return (
        <div className="Navbar">
            <NavLink
                to="/"
                exact
                className="NavLink"
                activeStyle={{
                background: "white",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/notes"
                exact
                className="NavLink"
                activeStyle={{
                background: "white",
                }}
            >
                Notes
            </NavLink>
            <NavLink
                to="/new"
                exact
                className="NavLink"
                activeStyle={{
                background: "white",
                }}
            >
                New Note
            </NavLink>          
        </div>
    )

}

export default Navbar;