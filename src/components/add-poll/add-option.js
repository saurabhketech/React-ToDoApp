import React, { Component } from "react";
import { Modal, Button, Spinner,Form } from "react-bootstrap";

export default class AddOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option_text : ""
        }
    }
    editOption=(event)=>{
        this.setState({['option_text']: event.target.value})
    }
    onSubmitAction =()=>{
        let text = this.state.option_text
        this.setState({['option_text']: ""})
        this.props.handleAddOptionRequest(text);
    }
    render() {
        return (
            <Modal show={this.props.addOption} onHide={this.props.addOptionRequestBox} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.editData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Add New Option
                    <Form.Control name="title" type="text" value={this.state.option_text}
                        id={this.props.editData._id} placeholder="" onChange={this.editOption} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.addOptionRequestBox} >
                        cancel
                    </Button>
                    <Button variant="primary" onClick={this.onSubmitAction}>
                        {/* {this.props.deleteStatus.isLoading == true ? <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> : null} */}
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}