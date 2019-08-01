import React, {Fragment} from 'react';
import {connect} from 'react-redux';


class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.employees !== this.props.employees) {
    //         this.setState({
    //             employees: this.props.employees
    //         });
    //     }
    // }

    deleteEmployee = (event) => {
        this.props.deleteEmployee(parseInt(event.target.value));
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

export default connect(mapStateToProps, null)(ListItems);