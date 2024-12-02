
import UserFooter from "../../Components/UserFooter.tsx";
import React from "react";
import User from "./User.tsx";
import UserHeader from "../../Components/UserHeader.tsx";


function UserUi() {
  return (
    <div>
        <UserHeader/>
        <User/>
        <UserFooter/>
    </div>
  )
}

export default UserUi
