import React, { Component } from 'react';
import { connect } from "react-redux";
import { registerRequest } from "../../Redux/Actions/register"
import { Container } from "react-bootstrap";
import RegisterForm from "../../components/register/register";
import Login from "../../components/login/login";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        }
    }

    handleShow = () => {
        console.log(this.state);

        this.setState({ "showLogin": true })
    }

    handleClose = () => {
        this.setState({ "showLogin": false })
    }
    render() {
        return (
            <Container>
                <RegisterForm registerRequest={this.props.registerRequest} />

                <Login showLogin={this.state.showLogin} handleShow={this.handleShow} handleClose={this.handleClose} />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        registerStatus: state.register,
        loginStatus: state.login
    };
};

const mapDispatchToProps = dispatch => ({
    registerRequest: formData => dispatch(registerRequest(formData)),
    loginRequest: LoginData => dispatch(registerRequest(LoginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
