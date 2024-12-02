import EnhancedGallery from "../enhancedGallery";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import React, { Component } from "react";

export class GalleryUi extends Component {
  render() {
    return (
      <div className="bg-[#FCFCFC] min-h-screen">
            <Header/>
            <EnhancedGallery/>
            <Footer/>
      </div>
    )
  }
}

export default GalleryUi
