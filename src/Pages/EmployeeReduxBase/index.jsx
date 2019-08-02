import React from 'react';
import CreateEmployee from 'Components/ReduxEmployees/AddEmployees';
import ListItems from 'Components/ReduxEmployees/ListItems';
import GoBack from 'Components/GoHome'

class EmployeeReduxBase extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="content employee">
                <GoBack />
                <div className="row">
                    <div className="col-6">
                        <h3>Employees</h3>
                    </div>
                    <div className="col-6">
                        <CreateEmployee
                            employees={this.props.employees} />
                    </div>
                </div>
                <div className="table">
                    <ListItems />
                </div>
            </div>
        )
    }
}

export default EmployeeReduxBase;