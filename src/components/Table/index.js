import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table'
import API from '../../utils/API';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [table, setTable] = useState([]);

    useEffect(()=> {
        API.getEmployees().then(({data}) => {
            setEmployees(data.results);
            console.log(data.results)
        })
    },[])

    return(
        <div>
        <h1>Table needs to go here</h1>
        <ul className="list-group">
            {employees.map(item => (
                <li className="list-group-item" key={item.id}>{item.name.first}</li>
            ))}
        </ul>
        </div>
    )

    

}

export default Employees