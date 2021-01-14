import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import API from "../utils/API"
import Header from "./Header/Header"
import Table from "./Table/Table"

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
            <Header/>
            // <Table/>
        )
    }








}

export default EmployeeContainer;
