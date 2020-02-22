import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';


export default class ToastView extends Component {
    render() {
        let variant = this.props.toster ? 'success' : 'danger';
        return (
            <>
                {this.props.toster && <Alert variant='danger'>
                   {this.props.errMsg}
          </Alert>}
            </>
        )
    }
}