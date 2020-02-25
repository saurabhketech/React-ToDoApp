import React, { Component } from 'react';
import CreateToDo from './create-todo';
import TaskView from './task-view';
import { Container } from 'react-bootstrap';
import Toster from './toast'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allTasks: [],
            newTask: "",
            toster: false,
            errMsg: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.handleUpdateTask = this.handleUpdateTask.bind(this);
        this.updateCheckedStatus = this.updateCheckedStatus.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            let checkExists = this.state.allTasks.filter(val => val.taskName == this.state.newTask);
            if (!checkExists.length) {
                let finalData = [...this.state.allTasks, ...[{ taskName: this.state.newTask, completed: false, time: new Date() }]]
                this.setState({ allTasks: finalData })
            } else {
                this.setState({ toster: true, errMsg: "The Task is already created" })
            }
        }

        setTimeout(() => {
            this.setState({ toster: false })
        }, 3000)
    }


    updateCheckedStatus(event) {
        console.log(event.target.name, event.target.value);
        this.state.allTasks.map(val=>{
            if(val.taskName === event.target.name){
                val.completed = !val.completed
            }
        })
        this.setState({ allTasks: this.state.allTasks })
    }


    handleUpdateTask(event) {
        console.log(event.target.name, event.target.value);
        this.state.allTasks.map(val=>{
            if(val.taskName === event.target.name){
                val.taskName = event.target.value
            }
        })
        this.setState({ allTasks: this.state.allTasks })
    }

    render() {

        return (
            <Container>
                <Toster toster={this.state.toster} errMsg={this.state.errMsg} handleUpdateTask={this.handleUpdateTask} />
                <CreateToDo newTask={this.state.newTask} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />
                <TaskView tasks={this.state.allTasks} handleUpdateTask={this.handleUpdateTask} updateCheckedStatus={this.updateCheckedStatus} />
            </Container>
        )
    }

}