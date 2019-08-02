import React from 'react';
import { withRouter } from 'react-router';

class GoBack extends React.Component {

    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="go-back">
               <button className="btn btn-info btn-xs" onClick={this.goBack}>Go Back</button>
            </div>
        )
    }
}

export default withRouter(GoBack);