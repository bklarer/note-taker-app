import {NavLink} from 'react-router-dom'

function Navbar() {


    return (
        <div className="Navbar">
            <NavLink
                to="/"
                exact
                className="NavLink"
                activeStyle={{
                background: "yellow",
                color: "black"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/notes"
                exact
                className="NavLink"
                activeStyle={{
                background: "yellow",
                color: "black"
                }}
            >
                Notes
            </NavLink>
            <NavLink
                to="/new"
                exact
                className="NavLink"
                activeStyle={{
                background: "yellow",
                color: "black"
                }}
            >
                New Note
            </NavLink>          
        </div>
    )

}

export default Navbar;