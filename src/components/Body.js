import React, { Component } from 'react'

export class Body extends Component {
    render() {

        return (

            <div style={styles.body}>
                <h1>Body</h1>
            </div >

        );
    }
};

const styles = {

    body: {
        height: 600,
        width: "90%",
        backgroundColor: "green",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 3px black"
    },
}

export default Body;