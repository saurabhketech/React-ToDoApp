import React, { Component } from 'react';
import { Table } from "react-bootstrap";

export default class UserList extends Component {
    constructor(props) {
        super(props);
    }

    getUserList = () => {
        return this.props.UserList.map(val => {
            return <tr id={val._id}>
                <td>{val.username ? val.username : "null"}</td>
                <td>{val.role ? val.role : "null"}</td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getUserList()}
                    </tbody>
                </Table>
            </div>
        )
    }
}