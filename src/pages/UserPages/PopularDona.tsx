import React from "react";

const DonationFor = [
    {
        title: "Feed a Student Initiative",
        image: "/feed.png?height=200&width=300",
        goal: 50000,
        raised: 30000
    },
    {
        title: "Campus Clean Water Initiative",
        image: "/water.png?height=200&width=300",
        goal: 100000,
        raised: 60000
    }
];

const PopularDona = () => {
    const calculateProgress = (raised: number, goal: number) => {
        return Math.min((raised / goal) * 100, 100);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DonationFor.map((event, index) => (
            <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
                <img
                    className="w-full h-48 object-cover"
                    src={event.image}
                    alt={event.title}
                />
                <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-semibold mb-4 line-clamp-2">
                        {event.title}
                    </h3>
                    <div className="space-y-3">
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-400 rounded-full transition-all duration-300"
                                style={{
                                    width: `₦{calculateProgress(event.raised, event.goal)}%`
                                }}
                            />
                        </div>
                        <div className="flex justify-between text-sm lg:text-base text-gray-600">
                            <span>Raised: ₦{event.raised.toLocaleString()}</span>
                            <span>Goal: ₦{event.goal.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default PopularDona;