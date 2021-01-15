import React from "react";

function Search(props){
    return(
        <form className="search">
            <div className="form-group mb-0 mx-auto bg-dark">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Search on first name, last name, phone number, or email"
                />
            </div>
          </form>
    )
}

export default Search;