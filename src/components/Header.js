import React, { Component } from 'react'

export class Header extends Component {
    render() {

        return (
            
            <div style={styles.header}>
                    <h2>Ruben Zaldana</h2>
                <br />
            </div >

        );
    }
};

const styles = {
    
    header: {
        height: 150,
        width: "100%",
        backgroundColor: "red",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 3px black"
    },
}

export default Header;