import React, { Component } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import "./compare.css"

export default class Compare extends Component {
    constructor(props) {
        super(props);

    }
    getCompareView (){
        let columns = []

        // this.props.list.map()

    }

    getHeading (){
        let colums = []

        colums.push(
        <Col className="listView">
        </Col>)

        this.props.list.map(val=>{
            colums.push(<Col className="listView">
                {val.name} 
            </Col>)
        })

        return colums
    }
    render (){
        return <Container>
            <Row>
                {this.getHeading()}
            </Row>
        </Container>
    }
}