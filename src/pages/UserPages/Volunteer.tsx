import Footer from "../../Components/Footer.tsx";
import Header from "../../Components/Header.tsx";
import React from "react";
import { Gift, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Volunteer() {
  return (
    <div className="bg-gray-100  min-h-screen">

      <main className="mx-10 mt-6">


        <div className="get-involved  bg-green-500 text-white py-12">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg">
            At Futo 1k we believe that every person has the power to make a difference.<br />
            Together, we can create a brighter, more hopeful future for all. Join us in our<br />
            mission and make an impact today
          </p>
        </div>

        <div className="icon bg-green-500 flex justify-center py-8">
          <Gift size={32} className="text-white" />
        </div>

        <div className="Donate flex flex-col md:flex-row justify-between items-center py-12">
          <div className="write text-gray-700 space-y-4">
            <h3 className="text-2xl font-bold">Donate</h3>
            <p>
              Your generous contribution help us fund vital programs and<br />
              initiatives. Whether it's a one time donation or reocurring<br />
              gift, your support enables us to provide education,<br />
              healthcare and economic opportunities to those who need it<br />
              most. Every penny makes a difference.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
              <Link to="/Campaigns">Donate</Link>
            </button>
          </div>
          <div className="image1">
            <img  src="/student_fund.png?height=400&width=600" alt="Donate" className="w-full h-auto" />
          </div>
        </div>

        <div className="love bg-green-500 flex justify-center py-8">
          <Heart size={32} className="text-white" />
        </div>

        <div className="volunteer flex flex-col md:flex-row justify-between items-center py-12">
          <div className="vol text-gray-700 space-y-4">
            <h3 className="text-2xl font-bold">Volunteer</h3>
            <p>
              Offer your time and skills to support our projects on the<br />
              ground. Whether you're a teacher, a healthcare<br />
              professional, a financial expert, or someone with a passion<br />
              for environmental communication, your expertise is<br />
              involvable. Join our team of dedicated volunteers and<br />
              experience the profound impact of your efforts firsthand.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
              <Link to="/Contact">Contact us</Link>
            </button>
          </div>
          <div className="image2">
            <img src="/feed.png?height=400&width=600" alt="Volunteer" className="w-full h-auto" />
          </div>
        </div>
      </main>

    </div>
  );
}

export default Volunteer;