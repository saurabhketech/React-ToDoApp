import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import "./add-poll.css"

class EditPolModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            options: [],
            newOption: "",
            addPollButtonDisabled: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let disabled = true;
        if (this.state.options.length && this.state.title) {
            disabled = false;
        }
        this.setState({ ...this.state, [event.target.name]: event.target.value, ['addPollButtonDisabled']: disabled })
    }

    addOption = () => {
        let option = this.state.options;
        let disabled = true
        if (this.state.newOption) {
            option.push(this.state.newOption)
            if (option.length && this.state.title) {
                disabled = false
            }
            this.setState({ ...this.state, ['options']: option, ['newOption']: "", ['addPollButtonDisabled']: disabled })
        }
    }
    closeEditModal = () => {
        this.setState({ options: [], newOption: "", title: "" });
        this.props.closeEditModal()
    }

    onAddPoll = async () => {
        this.setState({ ['addPollButtonDisabled']: true })
        let options = ""
        this.state.options.forEach((val, key) => {
            if (key == 0)
                options += val;
            else
                options += "____" + val;
        })
        let pollData = {
            title: this.state.title,
            options: options
        }

        this.props.addPollData(pollData)
    }
    render() {
        return (<div>
            <Modal show={this.props.showAddPoll} onHide={this.closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Poll</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Title</Form.Label>
                            <Form.Control name="title" type="text"
                                placeholder="Enter Title"
                                value={this.state.title} onChange={this.handleChange} />
                        </Form.Group>
                        <ul>
                            {this.state.options.map((val, key) => {
                                return <li key={key} id={key}> {key + 1} :  {val} </li>
                            })}
                        </ul>
                        <Form.Group>
                            <Form.Label>Add Options</Form.Label>
                            <Form.Control name="newOption" type="text"
                                placeholder="Enter option"
                                value={this.state.newOption} onChange={this.handleChange} />
                            <Button className="addoption" variant="secondary" onClick={this.addOption} >
                                Add Option
                            </Button>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeEditModal} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onAddPoll} disabled={this.state.addPollButtonDisabled}>

                        {this.props.addPoll.isLoading == true ? <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> : null} Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        addPoll: state.addPoll
    };
};

const mapDispatchToProps = dispatch => ({
    // PolRequest: () => dispatch(PolsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPolModal);