import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-4xl font-bold text-brown-700 border-b border-gray-200 pb-4 mb-8">
                        About Diyora Consultancy
                    </h1>
                    
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Diyora Consultancy is a leading financial consulting firm dedicated to providing expert advice and tailored solutions to help individuals and businesses achieve their financial goals. Our team of experienced consultants is committed to delivering personalized services that meet the unique needs of each client.
                    </p>

                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to empower our clients with the knowledge and tools they need to make informed financial decisions. We strive to build long-lasting relationships based on trust, integrity, and exceptional service.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li>Integrity</li>
                            <li>Excellence</li>
                            <li>Client-Centric Approach</li>
                            <li>Innovation</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-brown-700 mb-4">Why Choose Us?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            With a proven track record of success, Diyora Consultancy is your trusted partner in navigating the complexities of financial planning and investment strategies. Let us help you secure your financial future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;