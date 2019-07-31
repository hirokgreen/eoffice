import React from 'react';
import ListItems from '../ListItems';
import CreateEmployee from './AddEmployee';


class EmployeeBase extends React.Component {

    constructor() {
        super();
        this.state = {
            employees: [
                {
                    "id": 1,
                    "name": "Sakib",
                    "age": 28
                },
                {
                    "id": 2,
                    "name": "Liton",
                    "age": 27
                },
                {
                    "id": 3,
                    "name": "Soikot",
                    "age": 25
                },
                {
                    "id": 4,
                    "name": "Fizz",
                    "age": 21
                },
                {
                    "id": 5,
                    "name": "Hasan",
                    "age": 29
                }
            ]
        };
        this.addEmployee = this.addEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    addEmployee = (employee) => {
        employee.id = Math.floor(Math.random() * 1000);
        employee.age = parseInt(employee.age);
        this.setState({
            employees: [...this.state.employees, employee]
        });
    }

    deleteEmployee = (employeeId) => {
        const employees = this.state.employees;
        this.setState({
            employees: employees.filter((employee, index) => employee.id !== employeeId)
        });
    };

    render() {

        return (
            <div className="content employee">
                <div className="row">
                    <div className="col-6">
                        <h3>Employees</h3>
                    </div>
                    <div className="col-6">
                        <CreateEmployee addEmployee={this.addEmployee} employees={this.state.employees}/>
                    </div>
                </div>
                <div className="table">
                    <ListItems employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
                </div>
            </div>
        )
    }
}

export default EmployeeBase;