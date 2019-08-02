import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {addEmployee} from "Redux/Actions/Employee";
import {AddEmployeeHelper} from "Redux/Providers"

class CreateEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            errors: {
                name: '',
                age: '',
            },
            employees: props.employees
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmployee(employees){
        let errors = {};
        let exists = false;
        for (const item of this.props.employees) {
            if (item.name == this.state.name) {
                exists = true;
                break;
            }
        }

        if (exists) {
            errors.name = 'Name already exists!'
            this.setState({
                errors: errors
            })
            return false
        }
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.employees !== this.props.employees) {
            this.setState({
                employees: this.props.employees
            });
        }
    }

    handleSubmit = (event) => {
        let errors = {};
        let requiredError = 'This Field is Required!'

        this.setState({
            errors: {}
        })
        if (this.state.name && this.state.age) {
            if (this.validateEmployee()) {
                AddEmployeeHelper(this.state);
                this.setState({name: '', age: ''})
            }
        } else {
            if (!this.state.name) {
                errors.name = requiredError
            }
            if (!this.state.age) {
                errors.age = requiredError
            }
            this.setState({
                errors: errors
            })
        }
    }

    handleChange = (event) => {
        const key = event.target.name
        this.setState({ [key]: event.target.value })
    }

    render() {
        return (
            <div className="row">
                <div className="col-5 form-group">
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} className="form-control" required/>
                    <span className='text-danger'>{this.state.errors.name}</span>
                </div>
                <div className="col-5">
                    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} className="form-control" required/>
                    <span className='text-danger'>{this.state.errors.age}</span>
                </div>
                <div className="col-2 form-group">
                    <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addEmployee: addEmployee
        },
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateEmployee);