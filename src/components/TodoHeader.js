import React from 'react';
import Header from '../styles/ui/header';

export default class TodoHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        };

    }

    render() {
        const {title} = this.state;
        return [
            <Header key="todo-header">{title}</Header>
        ];
    }
}