import React, {useState, useEffect} from "react";
import Search from '../Search';
import Table from 'react-bootstrap/Table'
import API from '../../utils/API';
import Moment from 'react-moment';


const Employees = () => {
    const [employees, setEmployees] = useState([]); // Create employees state object and setEmployee method
    const [filteredEmployees, setFilteredEmployees] = useState([]); // Create filteredemployees state object and setEmployee method
    const [search, setSearch] = useState("");                       // Create search state object and setSearch method

    // Get results from Random User using the API
    useEffect(()=> {
        API.getEmployees().then(({data}) => {
            setEmployees(data.results);
            // console.log(data.results)
        })
    },[])

    // Filter employees on search by first name, last name, email, or phone 
    useEffect(()=> {
        let filtered = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()) || 
            employee.name.last.toLowerCase().includes(search.toLowerCase()) ||
            employee.email.toLowerCase().includes(search.toLowerCase()) ||
            employee.phone.includes(search))
        setFilteredEmployees(filtered)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])

    const handleInputChange = event => {
        setSearch(event.target.value);
      };


    const renderEmployees= () => {
        let data; 
        filteredEmployees.length ? data=filteredEmployees : data=employees
        return data.map((item, index)=> (
            <tr key={index}>
                <td>{index+1}</td>
                <td> <img src={item.picture.medium} 
                            alt={`{${item.name.firstname}_${item.name.last}}`}></img>
                </td>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td><Moment format="MM-DD-YYYY">{item.dob.date}</Moment></td>
            </tr>
        ))
    }

    return(
        <div>
        <Search search={search} 
                handleInputChange={handleInputChange} />
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
                {
                  renderEmployees()
                }
            </tbody>
        </Table>
        </div>
    )
}

export default Employees