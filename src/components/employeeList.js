import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import EmployeeForm from './employeeForm';
import Readme from './readme';

import ThemeContext from '../themeContext';

// USE STATE DEMO

const Employee = () => {
    const theme = useContext(ThemeContext);
    const [totalEmployee, setLen] = useState(2);
    const [emp, setEmp] = useState([
        {id:1,name:'Employee 1'},
        {id:2,name:'Employee 2'}])

    useEffect(()=>{
       setLen(emp.length)
    },[emp])

    const addEmployee = (empData) => {
        let obj = { id:emp.length+1, name:empData.value }
        setEmp([...emp,obj]);
    }
    const deleteEmployee = (id) => {
        setEmp(emp.filter(e=>{ return e.id !== id }));
    }
    return (
        <div className="row">
            <div className="col-md-8">
                <EmployeeForm addEmployee={addEmployee}/>
                <Table striped bordered hover className="col-md-12">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        emp.map((e,i)=>
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td><Button variant="danger"
                                        onClick={()=>deleteEmployee(e.id)}>Delete</Button></td>
                        </tr>
                        )
                    }
                    </tbody>
                </Table>

                <div className="jumbotron col-md-12" style={{ background: theme.background, color: theme.foreground }}>
                    <h6 className="">USE EFFECT</h6>
                    <p className="lead">Here we are showing the total employees using useEffect method</p>
                    <hr className="my-4"/>
                    <p>{totalEmployee}</p>
                </div>
            </div>
            <div className="col-md-4">
                <Readme/>
            </div>
        </div>
    )
}

export default Employee;