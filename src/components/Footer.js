import React, { Component } from 'react'

export class Footer extends Component {
    render() {

        return (

            <div style={styles.footer}>
                <h4>Copyright Zaldana</h4>
                <br />
            </div >

        );
    }
};

const styles = {

    footer: {
        height: 150,
        width: "100%",
        backgroundColor: "yellow",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 3px black"
    },
}

export default Footer;