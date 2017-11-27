import React from 'react';
import status from '../global/status';

export default class Alert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: this.props.description,
            status: this.props.status
        };

    }

    componentWillReceiveProps(nextProps) {
        if(status.ACTIVE === nextProps.status) {
            this.setState({
                status: nextProps.status,
                description: nextProps.description
            });
            setTimeout(_ => {
                this.setState({
                    status: "",
                    description: ""
                });
            }, 1000);
        }
    }

    render() {
        return [
            <div key="alert-container"
                 className={"alert alert-success " + this.state.status}
                 role="alert">
                 Completed {this.state.description}
            </div>
        ];
    }
}