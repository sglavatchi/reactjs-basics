import React from "react";

export default class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            title: props.title
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <button className="btn btn-primary" onClick={this.handleOnClick.bind(this)} >Click me !</button>
            </div>
        )

    }

    handleOnClick() {
        this.setState({ title: this.state.title + '!' });
    }
}