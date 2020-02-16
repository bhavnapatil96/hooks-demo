import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

// USE REF DEMO

const EmployeeForm = (props) => {
    const employee = useRef();
    return (
        <div>
            <form className="col-md-6">
                <div className="form-group">
                    <label>Employee Name</label>
                    <input type="text" className="form-control"
                    ref={employee}/>
                </div>
                <Button variant="primary"
                        className="mr-2"
                        onClick={()=>props.addEmployee(employee.current)}>
                    Add Employee
                </Button>
            </form>
        </div>
    );
}

export default EmployeeForm;