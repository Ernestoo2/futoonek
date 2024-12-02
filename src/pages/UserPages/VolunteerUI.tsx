import Footer from "../../Components/Footer.tsx";
import Header from "../../Components/Header.tsx";
import React, { Component } from "react";
import Volunteer from "./Volunteer.tsx";

export class VolunteerUi extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Volunteer/>
        <Footer/>
      </div>
    )
  }
}

export default VolunteerUi
