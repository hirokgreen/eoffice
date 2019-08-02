import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {deleteEmployee} from "Redux/Actions/Employee";
import {DeleteEmployeeHelper} from "Redux/Providers"

class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    deleteEmployee = (event) => {
        DeleteEmployeeHelper(
            parseInt(event.target.value),
            this.props.employees
        );
    }

    render() {

        const items = this.props.employees.map((employee, index) =>
            <div className="list-item">
                <div className="row py-1" key={employee.id}>
                    <div className="col-4">
                        {employee.name}
                    </div>
                    <div className="col-4">
                        {employee.age}
                    </div>
                    <div className="col-4 text-right">
                        <button value={employee.id} onClick={this.deleteEmployee}>X</button>
                    </div>
                </div>
            </div>
        );

        return (
            <Fragment>
                <div className="list-header row">
                    <div className="col-4">
                        <strong>Name</strong>
                    </div>
                    <div className="col-4">
                        <strong>Age</strong>
                    </div>
                    <div className="col-4 text-right">
                        <strong>Action</strong>
                    </div>
                </div>
                <hr className="my-1"></hr>
                <div className="list-content">
                    {items}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employee.data,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({deleteEmployee: deleteEmployee}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ListItems);