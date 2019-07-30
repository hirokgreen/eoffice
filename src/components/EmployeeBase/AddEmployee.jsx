import React from 'react';

class CreateEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        if (this.state.name && this.state.age) {
            this.props.addEmployee(this.state);
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
                </div>
                <div className="col-5">
                    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} className="form-control" required/>
                </div>
                <div className="col-2 form-group">
                    <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                </div>
            </div>
        )
    }
}

export default CreateEmployee;