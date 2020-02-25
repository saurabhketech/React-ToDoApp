import React, { Component } from "react"
import { Form, Button } from "react-bootstrap";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: "",
                password: "",
                role: ""
            },
            submitDisable: false
        }
    }
    handleSubmit = async event => {
        await this.setState({ "submitDisable": true })
        const { username, password, role } = this.state.formData;
        if (username && password && role) {
            this.props.registerRequest(this.state.formData);
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
                        <option value="user">User</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="button" onClick={this.handleSubmit} disabled={this.isDisabled()}>
                    Register
            </Button>
            </Form>
        )
    }
}