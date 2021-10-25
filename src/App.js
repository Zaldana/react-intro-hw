import './App.css';
import React, { Component } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export class App extends Component {
  
  state = {
    }

  render() {
    return (
      <div style={styles.box}>
        <div>
          <Header />
        </div>
        <div style={styles.display}>
          <Sidebar />
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const styles = {
  box: {
    height: "auto",
    width: "100%",
  },
  display: {
    display: "flex"
  }
}

export default App;
