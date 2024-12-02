import Footer from "../../Components/Footer.tsx";
import UserHeader from "../../Components/UserHeader.tsx";
import React, { Component } from "react";
import UserRegister from "../Register/UserRegister.tsx";

export class SignUp extends Component {
  render() {
    return (
      <div>
        {/* <UserHeader/> */}
        <UserRegister/>
      </div>
    )
  }
}

export default SignUp
