import React, { Component } from "react";

const Projects = [
    {
        title: "Feed a Student Initiative",
        image: "/feed.png?height=200&width=300",
        goal: 50000,
        raised: 30000
    },
    {
        title: "Campus Clean Water Initiative",
        image: "/water.png?height=200&width=300",
        goal: 40000,
        raised: 25000
    },
    {
        title: "Student Support Fund",
        image: "/student_fund.png?height=200&width=300",
        goal: 30000,
        raised: 20000
    },
];

export class Main3 extends Component {
    render() {
        const calculateProgress = (raised: number, goal: number): number => {
            if (!goal || goal <= 0) return 0;
            const percentage = (raised / goal) * 100;
            return Math.min(Math.max(percentage, 0), 100); // Clamp between 0 and 100
        };

        return (
            <div className="bg-gray-50">
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
                            Recent Campaigns
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {Projects.map((cause, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="aspect-video relative">
                                        <img
                                            src={cause.image}
                                            alt={cause.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-semibold mb-4 line-clamp-2">
                                            {cause.title}
                                        </h3>

                                        {/* Progress bar */}
                                        <div className="space-y-3">
                                            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-green-400 rounded-full transition-all duration-300"
                                                    style={{
                                                        width: `${calculateProgress(cause.raised, cause.goal)}%`
                                                    }}
                                                />
                                            </div>

                                            {/* Progress details */}
                                            <div className="flex justify-between items-center text-sm md:text-base">
                                                <div className="text-gray-700">
                                                    <span className="font-semibold">
                                                        ₦{cause.raised.toLocaleString()}
                                                    </span>
                                                    <span className="text-gray-500"> raised</span>
                                                </div>
                                                <div className="text-gray-700">
                                                    <span className="font-semibold">
                                                        {calculateProgress(cause.raised, cause.goal).toFixed(1)}%
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Goal */}
                                            <div className="text-right text-sm text-gray-500">
                                                Goal: ₦{cause.goal.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main3;
