import React from 'react';
import {connect} from 'react-redux';
import CreateEmployee from 'Components/ReduxEmployees/AddEmployees'
import ListItems from 'Components/ReduxEmployees/ListItems';

class EmployeeReduxBase extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="content employee">
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

const mapStateToProps = state => {
    return {
        employees: state.employee.data,
    };
}

export default connect(mapStateToProps, null)(EmployeeReduxBase);