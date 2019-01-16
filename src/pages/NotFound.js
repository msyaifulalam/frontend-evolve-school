import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className='App'>
                <h3> 404 - Page Not Founnd </h3>
                <Link to = {`/`}> Back! </Link>
            </div>
        );
    }
}

export default NotFound;