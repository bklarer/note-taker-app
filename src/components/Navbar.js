import {NavLink} from 'react-router-dom'

function Navbar() {


    return (
        <div className="Navbar">
            <NavLink
                to="/"
                exact
                className="NavLink"
                activeStyle={{
                textDecoration: "underline"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/notes"
                exact
                className="NavLink"
                activeStyle={{
                textDecoration: "underline"
                }}
            >
                Notes
            </NavLink>
            <NavLink
                to="/notes/new"
                exact
                className="NavLink"
                activeStyle={{
                textDecoration: "underline"
                }}
            >
                New Note
            </NavLink>      
        </div>
    )

}

export default Navbar;