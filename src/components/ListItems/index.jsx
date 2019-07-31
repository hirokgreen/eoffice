import React, {Fragment} from 'react';


class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: props.employees
        };
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.employees !== this.props.employees) {
            this.setState({
                employees: this.props.employees
            });
        }
    }

    deleteEmployee = (event) => {
        this.props.deleteEmployee(parseInt(event.target.value));
    }

    render() {

        const items = this.state.employees.map((employee, index) =>
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

export default ListItems;