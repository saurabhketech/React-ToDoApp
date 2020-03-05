import React, { Component } from "react"
import { Form, Button, Spinner } from "react-bootstrap";
import Toaster from "../toast/toast";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: "",
                password: "",
                role: ""
            },
            submitDisable: true
        }
    }
    handleSubmit = async event => {
        await this.setState({ "submitDisable": true })
        const { username, password, role } = this.state.formData;
        let response;
        if (username && password && role) {
           response = await this.props.registerRequest(this.state.formData);
        }
    };

    handleFormChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        let formData = {
            ...this.state.formData,
            [name]: value
        }
        this.setState({ ...this.state.formData, formData });
        if (formData.username && formData.password && formData.role && formData.password.length > 3) {
            this.setState({ "submitDisable": false })
        } else if (formData.password.length <= 3) {
            this.setState({ "submitDisable": true })

        }
    };
    isDisabled() {
        return this.state.submitDisable
    }
    render() {        
        return (
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name="username" type="text" onChange={this.handleFormChange} value={this.state.formData.username} placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" onChange={this.handleFormChange} value={this.state.formData.password} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Role</Form.Label>
                    <Form.Control as="select" name="role" onChange={this.handleFormChange} value={this.state.formData.role}>
                        <option value="">Select A Role</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                    </Form.Control>
                </Form.Group>


                {this.props.registerStatus.isError == true ? <Toaster show="true" type="danger" message={this.props.registerStatus.error} /> : null}

                {this.props.registerStatus.isRegistered == true ? <Toaster show="true" type="success" message="Account Created" /> : null}


                <Button variant="primary" type="button" onClick={this.handleSubmit} disabled={this.state.submitDisable}>
                    {this.props.registerStatus.isLoading == true ? <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> : null}
                    Register
            </Button>
            </Form>
        )
    }
}