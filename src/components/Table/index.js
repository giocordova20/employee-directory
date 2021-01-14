import React, {useState, useEffect} from "react";
import Search from '../Search';
import Table from 'react-bootstrap/Table'
import API from '../../utils/API';
import Moment from 'react-moment';


const Employees = () => {
    const [employees, setEmployees] = useState([]); // Create employees state object and setEmployee method
    const [searchState, setSearch] = useState("");  // Create search state object and setSearch method
    const [table, setTable] = useState([]);

    useEffect(()=> {
        API.getEmployees().then(({data}) => {
            setEmployees(data.results);
            console.log(data.results)
        })
    },[])

    return(
        <div>
        <Search />
        <Table className="text-center" striped bordered hover variant="dark">
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
                {employees.map(item => (
                    <tr>
                        <td>1</td>
                        <td> <img src={item.picture.medium} 
                                    alt={`{${item.name.firstname}_${item.name.last}}`}></img>
                        </td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td><Moment format="MM-DD-YYYY">{item.dob.date}</Moment></td>
                    </tr>
                ))}

            </tbody>
        </Table>
        </div>
    )

    

}

export default Employees