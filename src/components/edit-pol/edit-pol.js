import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Spinner } from "react-bootstrap";


class EditPolModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <Modal show={this.props.showEditModal} onHide={this.props.closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.editData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Poll Title</Form.Label>
                            <Form.Control name="title" type="text"
                                id={this.props.editData._id} placeholder=""
                                value={this.props.editData.title} onChange={this.props.editTitle} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeEditModal} disabled={this.props.updatePolStatus.isLoading}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.updateData}>
                       
                        {this.props.updatePolStatus.isLoading == true ? <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> : null} Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.login
    };
};

const mapDispatchToProps = dispatch => ({
    // PolRequest: () => dispatch(PolsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPolModal);