import React, { Component } from 'react'

export class Sidebar extends Component {
    render() {

        return (

            <div style={styles.sidebar}>
                <h1>Color 1</h1>
                <h1>Color 2</h1>
                <h1>Color 3</h1>
            </div >

        );
    }
};

const styles = {

    sidebar: {
        height: 600,
        width: "10%",
        backgroundColor: "cyan",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 3px black"
    },
}

export default Sidebar;