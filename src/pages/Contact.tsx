import React, { useState } from "react";
import { 
    MapPin, 
    Phone, 
    Mail, 
    Send, 
    CheckCircle, 
    AlertTriangle 
} from "lucide-react";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState({
        status: null,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Replace with actual form submission logic
            // For now, we'll simulate a submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setSubmitStatus({
                status: 'success',
                message: 'Your message has been sent successfully!'
            });
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus({
                status: 'error',
                message: 'Failed to send message. Please try again.'
            });
        }
    };

    return (
        <>
            <Header />
            <div className="bg-[#FCFCFC] min-h-screen">
                <main>
                    {/* Hero Section */}
                    <section className="bg-gradient-to-r from-[#4ade80] to-[#2ecc71] text-white py-20">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                                Contact Our Team
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto font-light opacity-90">
                                We're here to help and answer any questions you might have. We look forward to hearing from you!
                            </p>
                        </div>
                    </section>

                    {/* Contact Content */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                {/* Contact Form */}
                                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                                    
                                    {submitStatus.status === 'success' && (
                                        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center mb-4">
                                            <CheckCircle className="mr-3" />
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    
                                    {submitStatus.status === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center mb-4">
                                            <AlertTriangle className="mr-3" />
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label 
                                                htmlFor="name" 
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-transparent transition-all" 
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label 
                                                htmlFor="email" 
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Email Address
                                            </label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-transparent transition-all" 
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label 
                                                htmlFor="subject" 
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Subject
                                            </label>
                                            <input 
                                                type="text" 
                                                id="subject" 
                                                name="subject" 
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-transparent transition-all" 
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label 
                                                htmlFor="message" 
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Your Message
                                            </label>
                                            <textarea 
                                                id="message" 
                                                name="message" 
                                                rows={4} 
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-transparent transition-all" 
                                                required 
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full flex items-center justify-center bg-[#4ade80] text-white py-3 px-6 rounded-lg hover:bg-[#2ecc71] transition-all group"
                                        >
                                            <Send className="mr-2 group-hover:rotate-6 transition-transform" />
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
                                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
                                        
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <MapPin className="mr-4 text-[#4ade80] w-10 h-10" />
                                                <div>
                                                    <h3 className="font-semibold">Address</h3>
                                                    <p className="text-gray-600">Federal University of Technology, Owerri, Imo State, Nigeria</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center">
                                                <Phone className="mr-4 text-[#4ade80] w-10 h-10" />
                                                <div>
                                                    <h3 className="font-semibold">Phone</h3>
                                                    <p className="text-gray-600">+234 802 265 1217</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center">
                                                <Mail className="mr-4 text-[#4ade80] w-10 h-10" />
                                                <div>
                                                    <h3 className="font-semibold">Email</h3>
                                                    <p className="text-gray-600">info@futo1k.org</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Location</h3>
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                                            <iframe 
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1592019606887!2d6.9835731737230216!3d5.392695435272893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425f066c658699%3A0xbc7453a96a27c8f5!2sFederal%20University%20of%20Technology%20-%20Owerri!5e0!3m2!1sen!2sng!4v1731628777280!5m2!1sen!2sng" 
                                                width="600" 
                                                height="450" 
                                                style={{border:0}} 
                                                allowFullScreen={true} 
                                                loading="lazy"
                                                className="w-full h-full"
                                                title="Federal University of Technology Owerri"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;