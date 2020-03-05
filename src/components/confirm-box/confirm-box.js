import React, { Component } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

export default class ConfirmBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal show={this.props.showConfirmBox} onHide={this.props.handleConfirmBox} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.confirmationTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this poll
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleConfirmBox}>
                        No
                    </Button>
                    <Button variant="primary" onClick={this.props.deletePoll} disabled={this.props.deleteStatus.isLoading}>
                    {this.props.deleteStatus.isLoading == true ? <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> : null}
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}