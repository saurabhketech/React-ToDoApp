import React, { Component } from 'react';
import { connect } from "react-redux";
import { registerRequest } from "../../Redux/Actions/register"
import { Container } from "react-bootstrap";
import RegisterForm from "../../components/register/register";
import Login from "../../components/login/login";
import { loginRequest } from "../../Redux/Actions/login"
import Header from "../../components/navbar/navbar"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        }
    }

    handleShow = () => {
        this.setState({ "showLogin": true })
    }

    handleClose = () => {
        this.setState({ "showLogin": false })
    }
    render() {
        return (
            <div>
                <Header showLogin={this.state.showLogin} handleClose={this.handleClose} handleShow={this.handleShow} />
                <Container>
                    <RegisterForm registerRequest={this.props.registerRequest} registerStatus={this.props.registerStatus} />
                    <Login showLogin={this.state.showLogin} handleShow={this.handleShow} loginRequest={this.props.loginRequest} loginStatus={this.props.loginStatus} handleClose={this.handleClose} />
                </Container>
            </div>
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
    loginRequest: LoginData => dispatch(loginRequest(LoginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
