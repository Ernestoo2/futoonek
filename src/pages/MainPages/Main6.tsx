import React, { FormEventHandler, useState } from "react";

const Main6 = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
    }
  };
  return (
    <div>
      <section className="bg-[#4ade80] text-white py-16">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="w-[60%] mb-8 md:mb-0">
              <h3 className="mb-2 text-3xl font-bold">Subscribe to newsletter</h3>
              <p>
                Subscribe to receive updates on our latest campaigns, events, and
                impact stories from the FUTO community.
              </p>
            </div>
            {!isSubscribed ? (
              <form
                onClick={handleSubscribe}
                className="flex w-[60%] md:w-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-gray-800 rounded-l-md md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="px-6 py-3 text-gray-800 bg-white rounded-md shadow-sm">
                <p className="font-medium">Thanks for subscribing! 🎉</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main6;