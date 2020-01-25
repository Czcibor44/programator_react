import React from "react";

class Car extends React.Component {
    render() {
        var car;
        if (this.props.brand === "Ford") {
            car = "outstanding car!"
        }
        return <h2>I am {car} {this.props.brand}!</h2>;

    }
}

export default class Garage extends React.Component {
    render() {
        var Caradd = prompt("wpisz nazwę samochodu", "Toyota");

        return (
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand={Caradd} />
            </div>
        )
    }
}


