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
            {/* <ul className="list-group">
                {employees.map(item => (
                    <li className="list-group-item" key={item.id}>{item.name.first}</li>
                ))}
            </ul> */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>image</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>703-555-1234</td>
                    <td>mark.ott@paydirt.com</td>
                    <td>08/20/1990</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>image</td>
                    <td>Karen</td>
                    <td>Smith</td>
                    <td>703-555-2323</td>
                    <td>karen.smith@paydirt.com</td>
                    <td>07/08/1995</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )

    

}

export default Employees