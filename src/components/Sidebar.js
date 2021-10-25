import React, { Component } from 'react'

export class Sidebar extends Component {
    
    state = {
        height: 650,
        width: "15%",
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 3px black"
    };

    handleBlack = () => {
        this.setState({
            backgroundColor: "black",
            color: "white"
        });
    };

    handleAqua = () => {
        this.setState({
            backgroundColor: "aquamarine",
            color: "black"
        });
    };

    handleOrange = () => {
        this.setState({
            backgroundColor: "orange",
            color: "black"
        });
    };


    render() {

        return (

            <div style={this.state}>
                <ul>
                    <li>Black<button onClick={this.handleBlack}>Click </button></li>
                    <li>Aqua<button onClick={this.handleAqua}>Click </button></li>
                    <li>Orange<button onClick={this.handleOrange}>Click </button></li>
                </ul>
            </div >

        );
    }
};

export default Sidebar;