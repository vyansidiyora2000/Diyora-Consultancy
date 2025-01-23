import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Services from './Services';
import Stats from './Stats'; // Import the Stats component
import Reviews from './Reviews'; // Import the Reviews component
import logo from '../assets/logo.jpeg';
import Swiper from 'swiper';
import SwiperComponent from './SwiperComponent';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Navbar />
            
            {/* Hero Section with Logo and Info */}
            <div className="bg-white pt-10  ">
                <div className="container mx-auto px-4 pt-16">
                    <div className="flex flex-col items-center max-w-7xl mx-auto">
                       
                        <SwiperComponent />
                         <img 
                            src={logo}
                            alt="Diyora Consultancy Logo" 
                            className="h-64 w-auto object-contain mb-2"
                        />
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 text-center leading-relaxed mt-2">
                            Your trusted partner in financial consulting. We help businesses and individuals achieve their financial goals through expert guidance and personalized solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button 
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group bg-brown-700 text-white px-10 py-5 rounded-xl text-lg font-semibold 
                                         hover:bg-brown-800 transition-all duration-300 shadow-lg hover:shadow-xl
                                         flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                Explore Our Services
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-brown-700 px-10 py-5 rounded-xl text-lg font-semibold 
                                         hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl
                                         border-2 border-brown-700 w-full sm:w-auto"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center py-16">
                    <ChevronDown className="mx-auto text-brown-700 animate-bounce" size={32} />
                </div>
            </div>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-0"> {/* Reduced margin-bottom */}
                            <h2 className="text-4xl sm:text-5xl font-bold text-brown-700 mb-1">
                                Our Services
                            </h2>
                            <div className="w-24 h-1 bg-brown-700 mx-auto rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-xl mb-3">
                            <Services />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-brown-700 mb-4">
                                Get in Touch
                            </h2>
                            <div className="w-24 h-1 bg-brown-700 mx-auto rounded-full"></div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-8 lg:p-12">
                                    <h3 className="text-2xl font-semibold text-brown-700 mb-8">
                                     
                                    </h3>
                                    <ContactForm />
                                </div>
                                <div className="bg-brown-700 p-8 lg:p-12 text-white">
                                    <h3 className="text-2xl font-semibold mb-8"></h3>
                                    <ContactInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats" className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-brown-700 mb-4">
                                Our Achievements
                            </h2>
                            <div className="w-24 h-1 bg-brown-700 mx-auto rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-xl mb-3">
                            <Stats />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-brown-700 mb-4">
                                Client Success Stories
                            </h2>
                            <div className="w-24 h-1 bg-brown-700 mx-auto rounded-full"></div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <Reviews />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-16 border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-xl text-gray-600 mb-4">
                                &copy; {new Date().getFullYear()} Diyora Consultancy
                            </p>
                            <p className="text-gray-500">
                                Empowering financial success through expert guidance and innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;