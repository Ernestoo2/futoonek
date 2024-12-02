import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Main1 extends Component {
  render() {
    return (
      <div>
            <section className="container mx-auto px-4 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                Giving help to those who need it
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Join us in making a difference across our campus. Whether it’s supporting student initiatives, funding essential projects, or fostering academic success, Futo 1k brings us all together to support the FUTO community.
                            </p>
                            <div className="flex space-x-4">
                                <Link to="/login">
                                <button className="px-6 py-3 bg-[#4ade80] hover:bg-[#2ecc71] text-white rounded-md transition-colors">
                                    Donate Now
                                </button>
                                </Link>

                                <Link to="/AboutUs">
                                    <button className="px-6 py-3 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors">
                                        Know About Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/smile.png?height=400&width=600"
                                alt="Charity work"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </section>
      </div>
    )
  }
}

export default Main1
