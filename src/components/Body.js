import React, { Component } from 'react'
import BoxChildren from "./BoxChildren";

export class Body extends Component {
    render() {

        return (

            <div style={styles.body}>
                <img src="https://i.redd.it/1ekqc7v7t5a31.jpg" alt="" style={styles.image} />
                <div>
                    <p>I'm baby ennui shoreditch put a bird on it small batch distillery air plant semiotics, lumbersexual tumblr chambray. Gluten-free vinyl glossier leggings. Raw denim pabst normcore disrupt single-origin coffee. Cornhole kale chips glossier retro tilde readymade echo park mixtape selfies. Copper mug pop-up yuccie blog hella. Man braid chartreuse meggings, franzen shabby chic drinking vinegar tattooed jianbing quinoa prism tacos fixie palo santo organic. Leggings pabst helvetica pickled mlkshk vexillologist kale chips trust fund pork belly raclette tbh hella.</p>
                </div>
                <div style={styles.display}>
                    <BoxChildren
                        name="https://i.etsystatic.com/24936655/r/il/0ad0a2/2667006493/il_1588xN.2667006493_kz07.jpg"/>
                    <BoxChildren name="https://s1.ticketm.net/dam/a/c90/965833d9-2f76-4e79-bd87-f2bc61282c90_1339931_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=800&height=450&fit=crop&auto=webp"/>
                    <BoxChildren name="https://www.staplescenter.com/assets/img/lakers_slideshow-33dda92bb1.jpg"/>
                </div>
            </div >

        );
    }
};

const styles = {

    body: {
        height: 650,
        width: "85%",
        backgroundColor: "green",
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 50,
        justifyContent: "left",
        alignItems: "flex-start",
        border: "solid 3px black"
    },
    image: {
        height: 200,
        width: 200,
        paddingTop: 50,
    },
    display: {
        display: "flex",
    }
}

export default Body;