import React from "react";

function Navbar({summary}) {
    return(
        <div>
            <nav className="navbar bg-light">
                <h2 className="navbar-brand">Summary = {summary}</h2>
            </nav>
        </div>
    );
}

export default Navbar;