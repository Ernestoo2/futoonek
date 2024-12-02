import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Link } from "react-router-dom";

type Campaign = {
  id: number;
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  daysLeft: number;
}

export default function Campaigns() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const campaigns: Campaign[] = [
    {
      id: 1,
      title: "Clean Water for Rural Communities",
      description: "Help us provide clean, safe drinking water to rural communities in need.",
      image: "/frame-226.png?height=400&width=600",
      goal: 50000,
      raised: 35000,
      daysLeft: 15
    },
    {
      id: 2,
      title: "Education for Underprivileged Children",
      description: "Support our mission to bring quality education to underprivileged children.",
      image: "/frame-234.png?height=400&width=600",
      goal: 75000,
      raised: 60000,
      daysLeft: 30
    },
    {
      id: 3,
      title: "Emergency Food Relief",
      description: "Provide emergency food supplies to families affected by natural disasters.",
      image: "/frame-235.png?height=400&width=600",
      goal: 30000,
      raised: 22000,
      daysLeft: 7
    },
    {
      id: 4,
      title: "Healthcare for the Homeless",
      description: "Support our mobile clinics providing essential healthcare to homeless individuals.",
      image: "/frame-237.png?height=400&width=600",
      goal: 60000,
      raised: 45000,
      daysLeft: 20
    },
    {
      id: 5,
      title: "Reforestation Project",
      description: "Help us plant trees and restore forests in areas affected by deforestation.",
      image: "/water.png?height=400&width=600",
      goal: 40000,
      raised: 28000,
      daysLeft: 25
    },
    {
      id: 6,
      title: "Women's Empowerment Program",
      description: "Empower women through skills training and microfinance initiatives.",
      image: "/feed.png?height=400&width=600",
      goal: 55000,
      raised: 38000,
      daysLeft: 18
    }
  ]

  const categories = ['All', 'Urgent', 'Education', 'Healthcare', 'Environment']

  const filteredCampaigns = activeCategory === 'All'
    ? campaigns
    : campaigns.filter(campaign => {
      if (activeCategory === 'Urgent') return campaign.daysLeft <= 7;
      // Add more category filters as needed
      return true;
    });


    const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || "pk_test_00745f96bdd25023dd8fc7625fbbec024e276b06";


    const config = {
      reference: new Date().getTime().toString(),
      email: "ezechibuezeernest@gmail.com",
      amount: 100000, // Amount in kobo
      publicKey: paystackPublicKey,

    };

    if (!config.publicKey) {
      console.error("Paystack public key is missing. Please set it in the .env file.");
    }

    const initializePayment = usePaystackPayment(config);

    const handlePayment = async (campaignId: number, amount: number) => {
      const campaign = campaigns.find((c) => c.id === campaignId);
      if (!campaign) {
        alert("Campaign not found.");
        return;
      }

      const paymentConfig = {
        ...config,
        amount: amount * 100, // Convert amount to kobo
        metadata: {
          campaignId,
          campaignName: campaign.title,
        },
        onSuccess: async (reference: any) => {
          console.log("Payment success:", reference);
          alert("Payment successful!");
          // Optionally, refresh the campaigns or update the UI
        },
        onClose: () => {
          console.log("Payment closed");
        },
      };

      try {
        initializePayment(paymentConfig.onSuccess, paymentConfig.onClose);
      } catch (error) {
        console.error("Error initializing payment:", error);
        alert("An error occurred while initializing the payment. Please try again.");
      }
    };





  const calculateProgress = (raised: number, goal: number): number => {
    if (!goal || goal <= 0) return 0;
    const percentage = (raised / goal) * 100;
    return Math.min(Math.max(percentage, 0), 100); // Clamp between 0 and 100
  };

  return (
    <div className="bg-[#FCFCFC] min-h-screen">
      <Header />


      <main className="pb-16">
        <section className="bg-[#4ade80] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Campaigns</h1>
            <p className="text-xl max-w-2xl mx-auto">Join us in making a difference. Support our ongoing campaigns and help us create positive change in communities around the world.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full ₦{
                    activeCategory === category
                      ? 'bg-[#4ade80] text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  } transition-colors duration-200`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-400 rounded-full transition-all duration-300"
                          style={{
                            width: `${calculateProgress(campaign.raised, campaign.goal)}%`
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>Raised: ₦{campaign.raised.toLocaleString()}</span>
                      <span>Goal: ₦{campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{campaign.daysLeft} days left</span>
                      <button
                      className="px-4 py-2 bg-[#4ade80] text-white rounded-md hover:bg-[#FF5555] transition-colors"
                      onClick={() =>
                        handlePayment(
                          campaign.id,
                          campaign.goal - campaign.raised
                        )
                      }
                      >
                        Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Start Your Own Campaign</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Have a cause you're passionate about? Start your own fundraising campaign and make a difference in your community.
            </p>
            <button className="px-6 py-3 bg-[#4ade80] hover:bg-[#FF5555] text-white rounded-md transition-colors">
              Start a Campaign
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}