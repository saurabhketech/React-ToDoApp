import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../../components/navbar/navbar"
import { getUserListRequest } from "../../Redux/Actions/users";
import Toaster from "../../components/toast/toast";
import UserList from "../../components/user/user-list"
import "./User.css"
class User extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.usersListRequest()
    }
    render() {
        return (<div>
            <Header role={this.props.loginStatus.user ? this.props.loginStatus.user.role : null}/>
            <div className="heading" ><h2>Users List</h2></div>
            {this.props.usersList.isError == true ?
                <Toaster show="true" type="danger" message={this.props.usersList.error} /> :
                this.props.usersList.isLoading == true ? <Toaster show="true" type="success" message="loading.." /> : null}
            {/* <Toaster /> */}
            <UserList UserList={this.props.usersList.response ? this.props.usersList.response : []} />
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.login,
        usersList: state.usersList
    };
};

const mapDispatchToProps = dispatch => ({
    usersListRequest: () => dispatch(getUserListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);