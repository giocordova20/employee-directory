import React, { Component } from "react";
import API from "../utils/API"

class EmployeeContainer extends Component {
    state = {
        employees: [],
        search: ""
    };

    // When the component mounts, get a list of employees and update this.state.employees
    componentDidMount() {
        API.getEmployees()
        .then(res => this.setState({ employees: res.data.results }))
        .catch(err => console.log(err));
    }



    render() {
        return(
            <h1>Hello 
                {console.log(this.state.employees)}
            </h1>
            
        )
    }








}

export default EmployeeContainer;
