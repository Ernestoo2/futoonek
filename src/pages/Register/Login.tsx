import React, { useState } from "react";
import { Lock, LogIn, Mail, User } from "lucide-react";
import { BsBuildings, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UserHeader from "../../Components/UserHeader"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/User");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
  };

  const handlePhoneLogin = () => {
    console.log("Logging in with phone number");
  };

  const handleSchoolEmailLogin = () => {
    console.log("Logging in with school email");
  };

  return (
    <>
    

      <main className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
        <div className="w-full p-8 bg-white rounded-lg shadow-lg lg:max-w-6xl md:max-w-2xl sm:max-w-lg sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Section - Main Login Form */}
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <User className="w-8 h-8 mr-2 text-[#4ade80] stroke-2" />
                <h3 className="text-2xl font-bold">Sign in</h3>
              </div>
              <p className="mb-6 text-gray-600">
                Don't have an account?{" "}
                <Link to="/Login/userRegister" className="text-[#4ade80] hover:underline">
                  Sign up
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 stroke-2 left-3 top-1/2" />
                  <input
                    type="text"
                    className="w-full h-[40px] pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email Address"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 stroke-2 left-3 top-1/2" />
                  <input
                    type="password"
                    className="w-full h-[40px] pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="reminder">
                    <a href="#" className="text-[#4ade80] hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-3 font-semibold text-white transition-colors duration-300 bg-[#4ade80] rounded-lg hover:bg-[#2ecc71]"
                  >
                    Sign in <LogIn className="w-5 h-5 ml-2 stroke-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - Alternative Login Options */}
            <div className="space-y-6">
              <div className="mb-6 text-center">
                <h4 className="text-xl font-semibold text-gray-700">Or continue with</h4>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <FaGoogle className="w-6 h-6 mr-3 text-red-500" />
                  Sign in with Google
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <FaFacebook className="w-6 h-6 mr-3 text-blue-600" />
                  Sign in with Facebook
                </button>
                <button
                  onClick={handlePhoneLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <BsFillTelephoneFill className="w-6 h-6 mr-3 text-green-500" />
                  Sign in with Phone
                </button>
                <button
                  onClick={handleSchoolEmailLogin}
                  className="flex items-center justify-center w-full px-4 py-3 font-semibold text-gray-800 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <BsBuildings className="w-6 h-6 mr-3 text-purple-500" />
                  Sign in with School Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;