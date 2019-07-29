import React from 'react';
import ListItems from '../ListItems';


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
        }
    }

    render() {

        return (
            <div className="content">
                <h3>Employee List</h3>
                <div className="table">
                    <ListItems employees={this.state.employees} />
                </div>
            </div>
        )
    }
}

export default EmployeeBase;