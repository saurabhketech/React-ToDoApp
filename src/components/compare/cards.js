import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import "./card.css";
import Compare from './compare';

export default class cards extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            products: [{
                id: 1,
                name: "Cherry",
                Description: "Chery",
                image: "http://react-compare-app.surge.sh/images/Cherry.png",
                price: "$1.99",
                isHovering: false
            }, {
                id: 2,
                name: "Orange",
                Description: "Orange",
                image: "http://react-compare-app.surge.sh/images/Orange.png",
                price: "$2.99",
                isHovering: false
            }, {
                id: 3,
                name: "Nuts",
                Description: "Nuts",
                image: "http://react-compare-app.surge.sh/images/Nuts.png",
                price: "$3.99",
                isHovering: false
            }],
            compareList: []
        };
    }
    handleMouseHover(id) {
        let data = this.state.products.map(val => {
            if (id === val.id && !this.state.compareList.filter(val => val.id == id).length) {
                val.isHovering = !val.isHovering
            }
            return val
        })

        this.setState({ products: data });
    }

    addCompareList(id) {
        let existed = this.state.compareList.filter(val => val.id == id);
        let productsData = []
        if (!existed.length) {
            let data = this.state.products.filter(val => val.id == id);
            productsData = this.state.products.map(val => {
                if (val.id == id) {
                    val.isHovering = true
                }
                return val;
            })
            this.setState({ compareList: [...this.state.compareList, ...data], products: productsData });
        } else {
            this.setState({ compareList: [...this.state.compareList.filter(val => val.id !== id)] })
        }
    }

    checkStatus(id) {
        let existed = this.state.compareList.filter(val => val.id == id);
        if (!existed.length) {
            return "Compare"
        } else {
            return "Remove"
        }
    }

    getColumns() {
        let rows = []
        this.state.products.map(val => {
            rows.push(
                <Col onMouseEnter={() => this.handleMouseHover(val.id)} onMouseLeave={() => this.handleMouseHover(val.id)} id={val.id}>
                    <Card className="cardInfo">
                        <Card.Img variant="top" src={val.image} />
                        <div className="image_overlay" hidden={!val.isHovering} />
                        <div className="view_details" hidden={!val.isHovering} onClick={() => this.addCompareList(val.id)} >{this.checkStatus(val.id)}</div>
                        <Card.Body>
                            <Card.Title>{val.name}</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        {val.Description}
                                    </Col>
                                    <Col>
                                        {val.price}
                                    </Col>

                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        return rows;
    }
    render() {
        return (<Container className="box">
            <Row>
                {this.getColumns()}
            </Row >
            <Row>
                <Compare list={this.state.compareList || []} />
            </Row>
        </Container>)
    }
}