import React, { Component } from 'react';
import { ProgressBar } from "react-bootstrap";
import "./toast.css"

export default class Toaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressValue: 0
        }

    }

    async setProgress() {
        let counter = 0
        if (this.state.progressValue != 100)
            counter = ++this.state.progressValue

        await this.setState({ progressValue: counter })
        return this.state.progressValue
    }

    render() {
        return (
            <div className="toastModal">
                <div className={this.props.show ? '' : 'hidden'} >
                    <ProgressBar variant={this.props.type} label={this.props.message} now={100} />
                </div>
            </div>
        )
    }
}