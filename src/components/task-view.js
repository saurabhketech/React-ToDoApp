import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Accordion, Card, Button } from 'react-bootstrap'

export default class taskView extends Component {

    getData(filtertype) {
        let data = [];
        let tasks = []
        if (filtertype == 'All') {
            tasks = this.props.tasks;
            console.log(filtertype, tasks);
        } else if (filtertype == 'Active') {
            tasks = this.props.tasks.filter(val => val.completed == false)
        } else if (filtertype == 'Closed') {
            tasks = this.props.tasks.filter(val => val.completed == true)
        }


        tasks.forEach(val => {
            data.push(<Row>
                <InputGroup className="mb-3" >
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox name={val.taskName} checked={val.completed} aria-label="Checkbox for following text input" onChange={this.props.updateCheckedStatus} />
                    </InputGroup.Prepend>
                    <FormControl name={val.taskName} aria-label="Text input with checkbox" value={val.taskName} onChange={this.props.handleUpdateTask} />
                </InputGroup>
            </Row>)
        })
        return data;
    }

    render() {
        let rowsData = ['All', 'Active', 'Closed']
        let rows = []
        rowsData.map((val, key) =>
            rows.push(
                <Accordion defaultActiveKey = {0}>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey={key}>
                                {val}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={key}>
                            <Card.Body>{this.getData(val)}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )
        )
        return (<div>
            {rows}
        </div>)
    }

}