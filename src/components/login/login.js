import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";


export default class LoginComponent extends Component {
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.props.handleShow}>
                    Already Registered Login
                </Button>
                <Modal show={this.props.showLogin} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
} 