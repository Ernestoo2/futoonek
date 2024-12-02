import Footer from "../Components/Footer.tsx";
import Header from "../Components/Header.tsx";
import Main from "../Components/Main.tsx";
import React from "react";

function Home() {
  return (

        <div className="bg-[#FCFCFC] min-h-screen">
            <Header />
            <Main/>

            <Footer/>
        </div>

  )
}

export default Home;
