import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You sre submitting "+ this.state.username);
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        let header = '';
        if (this.state.username) {
            header = <h1>Hello {this.state.username}</h1>;
        }
        else {
            header = '';
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter Your name and submit:</p>
                <input
                    type = "text"
                    onChange={this.myChangeHandler}
                />
                <input
                    type="submit"
                />
            </form>
        );
    }
}