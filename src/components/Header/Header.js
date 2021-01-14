import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header (){

return (
    <Jumbotron className="text-center">
        <h1>Employee Directory</h1>
        <p>
        Click on the column header to sort employees or narrow your results by using the search box.
        </p>
    </Jumbotron>
 )
}
export default Header;