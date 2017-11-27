import React from 'react';
import status from '../global/status';
import Alert from './Alert';
import Header from '../styles/ui/header';


export default class Checklist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props.tasks,
            alert: {
                alertMessage: this.props.alertMessage,
                alertStatus: this.props.alertStatus
            }
        };
    }


    updateTasks(index) {
        const tasks = this.state.tasks;
        const task = tasks[index].status;

        if (status.COMPLETE === task) {
            tasks[index].status = status.ACTIVE;
        } else {
            tasks[index].status = status.COMPLETE;
        }

        this.setState({tasks: tasks});

    }

    toggleAlert(todo) {
        this.setState({
            alert: {
                alertMessage: todo.description,
                alertStatus: todo.status
            }
        });
    }


    renderComplete(todo, i) {
        if (status.COMPLETE === todo.status) {
            return [
                <li className="list-group-item"
                    key={todo.id}
                    value={todo.status}
                    onClick={() => this.updateTasks(i)}
                    onMouseUp={() => this.toggleAlert(todo)}>
                    <span className="circle complete"></span>
                    <span className="todo-desc">{todo.description}</span>
                </li>

            ];
        }

    }

    renderActive(todo, i) {
        if (status.ACTIVE === todo.status) {
            return [
                <li className="list-group-item"
                    key={todo.id}
                    value={todo.status}
                    onClick={() => this.updateTasks(i)}
                    onMouseUp={() => this.toggleAlert(todo)}>

                    <span className="circle active"></span>
                    <span className="todo-desc">{todo.description}</span>
                </li>

            ];
        }

    }

    getCompletedCount() {
        const tasks = this.state.tasks;
        let count = 0;
        tasks.forEach(task => {
            if (status.COMPLETE === task.status) {
                count++;
            }
        });
        return count;
    }


    render() {
        let completedTodos = this.getCompletedCount();
        let {alert, tasks} = this.state;

        return (
            <div>
                <Alert description={alert.alertMessage} status={alert.alertStatus}/>
                <ul className="list-group"
                    key="active">
                    {tasks.map((todo, i) => (
                        this.renderActive(todo, i)
                    ))}
                </ul>

                <Header>{completedTodos} tasks completed</Header>

                <ul className="list-group"
                    key="complete">
                    {tasks.map((todo, i) => (
                        this.renderComplete(todo, i)
                    ))}
                </ul>
            </div>

        );
    }
}

