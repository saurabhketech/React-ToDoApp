import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom"
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: localStorage.getItem('token') ? true : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        if (this.state.isLogin) {
            await localStorage.clear();
            this.setState({ isLogin: false })
            this.props.history.push('/')
        }else{
            this.props.handleShow()
        }
    }
    render() {        
        return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {this.props.role == "admin" ? <Nav.Link href="/users">Users</Nav.Link>: null}
                    
                </Nav>
                {/* <Nav className="mr-auto">
                    <Nav.Link href="/users">Users</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
            <Button onClick={this.handleClick}>
                {this.state.isLogin ? "Logout" : "Login"}
            </Button>
        </Navbar>)
    }
}

export default withRouter(NavBar)