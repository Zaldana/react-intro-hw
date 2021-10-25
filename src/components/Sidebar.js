import React, { Component } from 'react'

export class Sidebar extends Component {
    
    state = {
        //COLOR OBJECTS array
        colorArray: [
            {
                id: 0,
                color: "blue",
            },
            {
                id: 1,
                color: "red",
            },
            {
                id: 2,
                color: "green",
            },
        ],

        //css STYLES

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

    //color change function pasing color from color object array
    handleColor = (color) => {
        this.setState({
            backgroundColor: color,
        });
        console.log(color);
        console.log(this.state);
    };

    render() {

        return (

            //set styles from state
            <div style={this.state}>
                <ul>
                    {/* map colorArray to ul list and pass as paramater to handleColor function  */}
                    {this.state.colorArray.map(({ color, id }) => (
                        <li key={id}>{color}<button onClick={() => this.handleColor(color)}>Click</button>
                        </li>
                    ))}
                </ul>
            </div >

        );
    }
};

export default Sidebar;