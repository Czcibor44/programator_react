import React from "react";

export default class Car extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            counter: 0,
            address: {
                street: "Okopowa",
                number: 36
            }
        };
    }

    changeColor = (color) => {
        this.setState({counter: this.state.counter + 1, color: color});
    }

    requestColor = () => {
        var color = prompt("Provide color", "Pastel Pink");
        this.changeColor(color);
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>

                <button
                    type="button"
                    onClick={this.requestColor}
                >Provide color</button>
                <p>Clicked {this.state.counter} number of times.</p>
            </div>
        );
    }

}

