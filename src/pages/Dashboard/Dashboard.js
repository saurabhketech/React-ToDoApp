import React, { Component } from 'react';
import { connect } from "react-redux";
import { Accordion, Card, ListGroup, Button, ProgressBar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md"
import { IoIosAddCircleOutline } from "react-icons/io";
import { PolsRequest, updatePolsRequest, addPoll, deletePoll, addOption, deleteOption, doVote } from "../../Redux/Actions/pols";
import Header from "../../components/navbar/navbar";
import EditPolModal from "../../components/edit-pol/edit-pol";
import AddNewPoll from "../../components/add-poll/add-poll";
import DeleteConfirmBox from "../../components/confirm-box/confirm-box";
import AddNewOption from "../../components/add-poll/add-option";
import "./Dashboard.css"
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            polsData: [],
            editData: {
            },
            showEditModal: false,
            addData: {
                title: "",
                options: []
            },
            showAddPoll: false,
            showConfirmBox: false,
            confirmationTitle: "",
            deletedId: null,
            showAddOption: false,
            doPoll: []
        }
        this.closeEditModal = this.closeEditModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.addPoll = this.addPoll.bind(this);
    }

    async componentDidMount() {
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response, doPoll: localStorage.getItem(this.props.loginStatus.user._id) !== null ? JSON.parse(localStorage.getItem(this.props.loginStatus.user._id)) : [] })
    }

    // async componentWillUpdate(){
    //     await this.props.PolRequest()
    //     this.setState({ polsData: this.props.polStatus.response })
    // }

    handleChange(event) {
        let data = this.state.polsData.map(val => {
            if (val._id == event.currentTarget.id) {
                val.title = event.currentTarget.value
            }
            return val
        })
        this.setState({ polsData: data })
    }
    openEditModal(event) {
        let data = this.state.polsData.filter(val => val._id == event.currentTarget.id)
        this.setState({ editData: data[0], showEditModal: true })
    }
    closeEditModal() {
        this.setState({ showEditModal: false, showAddPoll: false })
    }
    editTitle = (event) => {
        let name = event.target.name;
        this.setState({ editData: { ...this.state.editData, [name]: event.target.value } })
    }
    updateData = async () => {
        await this.props.polUpdateRequest(this.state.editData);
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response, showEditModal: false })
    }
    openAddModal = () => {
        this.setState({ showAddPoll: true })
    }
    deleteAPoll = (event) => {
        let data = this.props.polStatus.response.filter(val => val._id == event.currentTarget.id)[0]
        this.setState({ ['showConfirmBox']: !this.state.showConfirmBox, ['confirmationTitle']: data.title, ['deletedId']: event.currentTarget.id })
    }

    async addPoll(data) {
        await this.props.addPollRequest(data);
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response, ['showAddPoll']: false })
    }

    handleConfirmBox = () => {
        this.setState({ ['showConfirmBox']: !this.state.showConfirmBox })
    }

    deletePoll = async () => {
        await this.props.deletePollRequest({ id: this.state.deletedId });
        await this.props.PolRequest()
        this.setState({ ['showConfirmBox']: !this.state.showConfirmBox, ['polsData']: this.props.polStatus.response })
    }

    addOptionRequestBox = (event) => {
        if (event && event.currentTarget && event.currentTarget.id) {
            let data = this.state.polsData.filter(val => val._id == event.currentTarget.id)
            this.setState({ ['showAddOption']: !this.state.showAddOption, editData: data[0] })
        } else {
            this.setState({ ['showAddOption']: !this.state.showAddOption })
        }
    }

    handleAddOptionRequest = async (text) => {
        this.setState({ ['showAddOption']: !this.state.showAddOption })
        this.props.addOptionRequest({ _id: this.state.editData._id, option: text });
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response })
    }

    deleteAnOption = async (option, id) => {
        await this.props.deleteOptionRequest({ id: id, option: option })
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response })
    }

    selectOption = async (event) => {
        let addedPol = localStorage.getItem(`${this.props.loginStatus.user._id}`)
        if (addedPol !== null) {
            addedPol = JSON.parse(addedPol)
        } else {
            addedPol = []
        }

        addedPol = localStorage.getItem(`${this.props.loginStatus.user._id}`) ? JSON.parse(localStorage.getItem(`${this.props.loginStatus.user._id}`)) : []
        if (event.target.id) {
            addedPol.push({ pollId: event.target.id, option: event.target.value })
            this.props.doVoteRequest({ id: event.target.id, option: event.target.value })
        }

        this.setState({ doPoll: addedPol })
        localStorage.setItem(`${this.props.loginStatus.user._id}`, JSON.stringify(addedPol));
    }

    disabledRadioButton = (id) => {
        let addedPolsInfo = this.state.doPoll;
        return addedPolsInfo.filter(val => val.pollId == id).length > 0 ? true : false;
    }

    getSelectedOption = (id, option) => {
        return this.state.doPoll.filter(val => (val.pollId == id && val.option == option)).length > 0 ? true : false;
    }
    getPols = () => {
        let pols = [];
        if (this.props.polStatus && this.props.polStatus.response && this.props.polStatus.response.length) {
            pols = this.state.polsData.map(val =>
                <div>
                    <Accordion >
                        <Card id={val._id}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {val.title}
                                </Accordion.Toggle>
                                {this.props.loginStatus.user.role == "admin" ? <i className="glyphicon" name={val._id} id={val._id} onClick={this.deleteAPoll}><MdDelete id={val._id} /></i> : null}
                                {this.props.loginStatus.user.role == "admin" ? <i className="glyphicon" id={val._id} onClick={this.openEditModal}><FaEdit /></i> : null}
                                {this.props.loginStatus.user.role == "admin" ? <i className="addOption" id={val._id} onClick={this.addOptionRequestBox}><IoIosAddCircleOutline /></i> : null}
                            </Card.Header>
                            
                            <Accordion.Collapse eventKey="0">
                                <ListGroup className="optionLists">
                                    {this.props.loginStatus.user.role == "admin" ? val.options.map(value =>
                                        <center>
                                            <ListGroup.Item name={value.option}> <i className="option">{value.option} </i>   <i>Vote: {value.vote} </i>
                                                <i className="deleteOption" key={value.option} id={val._id} onClick={() =>  this.deleteAnOption(value.option, val._id) }><MdDelete id={val._id} /></i>
                                            </ListGroup.Item>
                                        </center>
                                    ) : val.options.map(value =>
                                        <ListGroup.Item>
                                            <input type="radio" id={val._id} name={val._id} key={val._id} value={value.option} checked={this.getSelectedOption(val._id, value.option)} onChange={this.selectOption} disabled={this.disabledRadioButton(val._id)} /> <label >{value.option}</label>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>

            )
        }
        return pols
    }

    render() {
        return (
            <div>
                <Header role={this.props.loginStatus.user ? this.props.loginStatus.user.role : null} />
                <DeleteConfirmBox deleteStatus={this.props.deletePoll} deletePoll={this.deletePoll} confirmationTitle={this.state.confirmationTitle} showConfirmBox={this.state.showConfirmBox} handleConfirmBox={this.handleConfirmBox} />
                {this.props.loginStatus.user.role == "admin" ? <AddNewPoll addPollData={this.addPoll} addData={this.state.addData} showAddPoll={this.state.showAddPoll} closeEditModal={this.closeEditModal} /> : null}
                <EditPolModal updatePolStatus={this.props.updatePolStatus} updateData={this.updateData} editTitle={this.editTitle} showEditModal={this.state.showEditModal} editData={this.state.editData} closeEditModal={this.closeEditModal} />
                <div className="heading">
                    <h3>Polls List {this.props.loginStatus.user.role == "admin" ? <i className="addButton" onClick={this.openAddModal}><IoIosAddCircleOutline /></i> : null}</h3>
                </div>
                {this.props.loginStatus.user.role == "admin" ? <AddNewOption handleAddOptionRequest={this.handleAddOptionRequest} editData={this.state.editData} addOption={this.state.showAddOption} addOptionRequestBox={this.addOptionRequestBox} /> : null}
                {(this.props.polStatus && this.props.polStatus.response) || (this.props.addOptionStatus.isLoading === true) ? this.getPols() : <ProgressBar animated now={100} label="Loading.." />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.login,
        polStatus: state.pols,
        updatePolStatus: state.polsUpdate,
        addPollStatus: state.addPoll,
        deletePoll: state.deletePoll,
        addOptionStatus: state.addOption,
        deleteOption: state.deleteOption,
        doVoteStatus: state.doVote
    };
};

const mapDispatchToProps = dispatch => ({
    PolRequest: () => dispatch(PolsRequest()),
    polUpdateRequest: (formData) => dispatch(updatePolsRequest(formData)),
    addPollRequest: (formData) => dispatch(addPoll(formData)),
    deletePollRequest: (data) => dispatch(deletePoll(data)),
    addOptionRequest: (data) => dispatch(addOption(data)),
    deleteOptionRequest: (data) => dispatch(deleteOption(data)),
    doVoteRequest: (data) => dispatch(doVote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);