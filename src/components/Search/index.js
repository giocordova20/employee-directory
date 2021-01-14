import React from "react";

function Search(props){
    return(
        <form className="search">
        <div className="form-group">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Search on name or phone number"
            id="breed"
          />
          </div>
          </form>
    )
}

export default Search;