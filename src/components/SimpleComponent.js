// Code SimpleComponent Here

import { render } from "enzyme";
import React, { Component } from "react";
export default class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {mood: "happy" };
    }

    handleClick = () => {
        this.setState(previousState => {
            return { mood: previousState.mood === "happy" ? "sad" : "happy" };
        });
    };

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>;
    }
}