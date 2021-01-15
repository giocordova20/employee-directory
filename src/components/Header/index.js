import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header (){

return (
    <Jumbotron className="text-center bg-dark text-white mb-0 rounded-0">
        <h1>Employee Directory</h1>
        <p>
        Search employees by using the search box.
        </p>
    </Jumbotron>
 )
}
export default Header;