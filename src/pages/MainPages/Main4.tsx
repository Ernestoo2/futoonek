import React, { Component } from "react";

const EventsComingUp = [
    {
        title: "Charity Football Match",
        date: "December 15, 2024",
        location: "Futo main pitch"
    },
    {
        title: "Annual Fundraising Gala",
        date: "December 22, 2024",
        location: "SOPS Theatre" },
    {
        title: "Campus Clean-up Day",
        date: "December 5, 2024",
        location: "Asiabaka Square"
    },
]
export class Main4 extends Component {
    render() {
        return (
            <div>
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {EventsComingUp.map((event, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                    <p className="text-gray-600 mb-2">{event.date}</p>
                                    <p className="text-gray-600">{event.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main4
