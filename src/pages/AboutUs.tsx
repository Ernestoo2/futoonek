import Footer from "../Components/Footer.tsx";
import Header from "../Components/Header.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const ToVolunteer = () => {
    navigate("/Volunteer");
  };

  return (
    <div className="bg-[#FCFCFC] min-h-screen font-[Poppins] text-gray-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#4ade80] text-white py-20">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Futo 1k</h1>
            <p className="max-w-2xl mx-auto text-xl">Dedicated to making a positive impact in FUTO and beyond.</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 md:mb-0 md:pr-8">
                <h1 className="text-3xl font-bold text-center">Our Mission</h1>
                <p className="mb-4 leading-relaxed text-gray-600">
                  At Futo 1k, our mission is to empower students by providing essential financial support, enabling them to focus on their education and well-being. We believe that every student deserves access to resources that can help them succeed, regardless of their financial background.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through the power of collective action and compassion, we aim to build a world where every individual has the chance to thrive and reach their full potential.
                </p>

                {/* New Section */}
                <div className="mt-6 space-y-6">
                  <h2 className="text-2xl font-semibold text-center">FUTO 1K is more than a fundraiser. It's a movement to:</h2>
                  <div>
                    <h3 className="text-xl font-bold text-[#4ade80] mb-2">1. Support Medical Needs</h3>
                    <p className="text-gray-600">
                      Providing health assistance for students in need.
                      Equipping medical facilities to ensure access to quality care.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4ade80] mb-2">2. Enhance Welfare</h3>
                    <p className="text-gray-600">
                      Addressing the essential needs of students, including accommodation and transport support.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4ade80] mb-2">3. Cover School Fees</h3>
                    <p className="text-gray-600">
                      Assisting underprivileged students to stay in school and pursue their dreams without fear of being sent out.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4ade80] mb-2">4. Feed the Future</h3>
                    <p className="text-gray-600">
                      Offering food support to ensure no student studies on an empty stomach.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4ade80] mb-2">5. And More</h3>
                    <p className="text-gray-600">
                      Funding infrastructure improvements to create a better learning environment for students and staff alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections (Targets, Team, Achievements, etc.) */}
        <section className="py-16 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Our Targets</h2>
            <div className="space-y-8">
              <div className="flex flex-col items-center md:flex-row">
                <div className="mb-4 md:w-1/4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2015</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-2 text-xl font-semibold">Foundation</h3>
                  <p className="text-gray-600">
                    Charity was founded by a group of passionate individuals committed to making a difference in their local community.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <div className="mb-4 md:w-1/4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2017</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-2 text-xl font-semibold">Expansion</h3>
                  <p className="text-gray-600">
                    We expanded our reach to neighboring countries, launching our first international programs in education and healthcare.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <div className="mb-4 md:w-1/4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2020</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-2 text-xl font-semibold">Major Milestones</h3>
                  <p className="text-gray-600">
                    Charity reached the milestone of helping over 1 million people and launched our sustainable development initiatives.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <div className="mb-4 md:w-1/4 md:mb-0">
                  <div className="text-2xl font-bold text-[#4ade80]">2024</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-2 text-xl font-semibold">Present Day</h3>
                  <p className="text-gray-600">
                    Today, we continue to grow and adapt, addressing the most pressing challenges facing communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Our Team</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { name: "Eze Ernest", role: "Executive Director", image: "/placeholder-image1.png?height=300&width=300" },
                { name: "David Chike", role: "Operations Manager", image: "/placeholder-image3.png?height=300&width=300" },
                { name: "Emily Brown", role: "Fundraising Coordinator", image: "/placeholder-image4.png?height=300&width=300" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} className="object-cover w-48 h-48 mx-auto mb-4 rounded-full" />
                  <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { number: "1M+", description: "Lives Impacted" },
                { number: "50+", description: "Countries Reached" },
                { number: "500+", description: "Successful Projects" },
                { number: "10K+", description: "Volunteers Worldwide" },
              ].map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#4ade80] mb-2">{achievement.number}</div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Join Us in Making a Difference</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Whether you want to volunteer, donate, or spread the word about our cause, there are many ways to get involved and support our mission.
            </p>
            <button
              onClick={ToVolunteer}
              className="px-6 py-3 bg-[#4ade80] hover:bg-[#000000] text-white rounded-md transition-colors">
              Get Involved
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}