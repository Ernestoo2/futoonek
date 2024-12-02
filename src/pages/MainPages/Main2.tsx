import React, { Component } from "react";
import { AcademicCapIcon, HeartIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export class Main2 extends Component {
  render() {
    return (
      <div>
            <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <AcademicCapIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">School Fees Assistance</h3>
                                <p className="text-gray-600">Helping students raise funds to complete their school fees, ensuring they stay on track with their education.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <UserGroupIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">End Student Hunger</h3>
                                <p className="text-gray-600">Providing food support to ensure no student goes hungry, allowing them to focus fully on their studies.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center">
                                <HeartIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Medical Bill Support</h3>
                                <p className="text-gray-600">Assisting financially unstable students with medical bills, supporting their health and well-being.</p>
                            </div>
                        </div>
                    </div>
                </section>
      </div>
    )
  }
}

export default Main2
