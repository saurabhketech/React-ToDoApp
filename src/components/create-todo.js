import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

export default class CreateToDo extends Component {
    render() {
        let newTask = this.props.newTask;
        return (<div>
            {/* <Form> */}
                {/* <Form.Group controlId="todoTask"> */}
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text" value={newTask} name="newTask"  placeholder="Enter New To Do task" onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPress} />
                {/* </Form.Group> */}
                {/* <Button variant="primary" type="submit" onClick={this.props.handleSubmit}>
                    Submit
                </Button> */}
            {/* </Form> */}
        </div>)
    }

}