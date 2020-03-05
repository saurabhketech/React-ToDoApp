import React, { Component, useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import Toaster from "../toast/toast";
import { withRouter } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            username: "",
            password: "",
            disabled: true,
            loginStatus: this.props.loginStatus
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleShow = () => {
        this.props.handleShow()
        this.setState({ disabled: true, showLogin: true })
    }

    handleClose = () => {
        this.props.handleClose()
        this.setState({ "disabled": true, username: "", password: "" })
    }

    handleSubmit = async () => {
        this.setState({ "disabled": true })
        let loginData = {
            username: this.state.username,
            password: this.state.password
        }
        let response = await this.props.loginRequest(loginData);
        if (this.props.loginStatus.isLogin) {
            this.props.history.push('/dashboard')
        }
    }
    handleOnChange = async (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        await this.setState({ [name]: value })
        if (this.state.username && this.state.password && this.state.password.length > 3) {
            this.setState({ "disabled": false })
        } else if (this.state.password && this.state.password.length <= 3) {
            this.setState({ "disabled": true })
        }
    }
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Already Registered Login
                </Button>
                <Modal show={this.props.showLogin} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control name="username" value={this.state.username} onChange={this.handleOnChange} type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" value={this.state.password} onChange={this.handleOnChange} type="password" placeholder="Password" />
                            </Form.Group>
                            {this.props.loginStatus.isError == true ? <Toaster show="true" type="danger" message={this.props.loginStatus.error} /> : null}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit} disabled={this.state.disabled}>
                            {this.props.loginStatus.isLoading == true ? <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> : null}

                            login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default withRouter(LoginComponent)