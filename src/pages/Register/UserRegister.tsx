import React, { useState } from "react";



const UserRegister = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        institution: "",
    });

   
    const [passwordError, setPasswordError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "password") {
            validatePassword(value);
        }
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


   
    const Universities = [
        "Federal University of Technology Owerri (FUTO)",
        "University of Nigeria, Nsukka (UNN)",
        "University of Lagos (UNILAG)",
        "University of Ibadan (UI)",
        "Ahmadu Bello University (ABU)",
        "University of Benin (UNIBEN)",
        "University of Port Harcourt (UNIPORT)",
        "Obafemi Awolowo University (OAU)",
        "Federal University of Technology Akure (FUTA)",
        "University of Ilorin (UNILORIN)",
        "Nnamdi Azikiwe University (UNIZIK)",
        "Lagos State University (LASU)",
        "Covenant University",
        "Babcock University",
        "American University of Nigeria",
        "Pan-Atlantic University",
        "Landmark University",
        "Afe Babalola University",
        "Federal University Oye-Ekiti (FUOYE)",
        "Michael Okpara University of Agriculture"
    ].sort();
    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@₦!%*?&])[A-Za-z\d@₦!%*?&]{8,}₦/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Your password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol."
            );
        } else {
            setPasswordError(null);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="w-full min-h-screen bg-gray-50">
            <div className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                        <div className="bg-slate-200 rounded-lg shadow-md p-6 text-center mb-8">
                            <h2 className="font-extrabold text-2xl md:text-3xl xl:text-4xl">
                                Create Your Account
                            </h2>
                            <p className="mt-3 text-sm md:text-base xl:text-lg text-gray-600">
                                Join our community and start making a difference
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                           
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Firstname "
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Lastname"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email Address @example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Institution & Password */}
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                                        Institution
                                    </label>
                                    <select
                                        id="institution"
                                        name="institution"
                                        value={formData.institution}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                                        required
                                    >
                                        <option value="">Select your institution</option>
                                        {Universities.map((university, index) => (
                                            <option key={index} value={university}>
                                                {university}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Password section with validation */}
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ₦{passwordError
                                                        ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                                        : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    }`}
                                                required
                                            />
                                            {passwordError && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-2">
                                                    {passwordError}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Password requirements */}
                                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                                    <p className="font-semibold text-gray-700 mb-2">Your password must have at least:</p>
                                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                        <li>Minimum 8 characters</li>
                                        <li>1 uppercase letter</li>
                                        <li>1 lowercase letter</li>
                                        <li>1 number</li>
                                        <li>1 symbol</li>
                                    </ul>
                                </div>

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#4ade80] hover:bg-[#2ecc71] text-white font-semibold py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300 mt-8"
                            >
                                Create Account
                            </button>
                        </form>
                        {/* Terms and privacy */}
                        <p className="text-gray-600 text-sm">
                            By clicking the Sign up button below, you agree to the
                            <a href="#" className="text-[#4ade80] hover:underline">
                                Terms of service
                            </a>{" "}
                            and acknowledge the{" "}
                            <a href="#" className="text-[#4ade80] hover:underline">
                                Privacy notice
                            </a>
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default UserRegister;