import React, { Component } from 'react'

export class BoxChildren extends Component {
    render() {

        return (

            <div>
                <img src="https://i.redd.it/1ekqc7v7t5a31.jpg" style={styles.image} />
            </div >

        );
    }
};

const styles = {

    image: {
        height: 200,
        width: 200,
        paddingTop: 50,
        paddingRight: 60
    }
}

export default BoxChildren;