import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div>
        
        <div className="bg-brown-50 shadow-lg rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-brown-800">Contact Information</h2>
            
            <div className="space-y-4">
                <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-brown-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-brown-800">Address</h3>
                        <p className="text-gray-600">12, Anupam Arcade BRTS Canal Road, Parvat Patiya, Opp Amazia Amusment Park, Magob, Surat, Gujarat 395010, India</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-brown-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-brown-800">Phone</h3>
                        <p className="text-gray-600">+91 95744 93000</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-brown-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-brown-800">Email</h3>
                        <p className="text-gray-600">info@diyoraconsultancy.com</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-brown-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-brown-800">Working Hours</h3>
                        <p className="text-gray-600">Mon-Fri, 9 AM - 5 PM</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-brown-200">
                <h3 className="font-semibold text-brown-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/nodiyora/" className="p-2 bg-brown-100 rounded-lg hover:bg-brown-200 transition duration-200">
                        <Facebook className="w-6 h-6 text-brown-600" />
                    </a>
                    <a href="https://www.twitter.com" className="p-2 bg-brown-100 rounded-lg hover:bg-brown-200 transition duration-200">
                        <Twitter className="w-6 h-6 text-brown-600" />
                    </a>
                    <a href="https://www.linkedin.com" className="p-2 bg-brown-100 rounded-lg hover:bg-brown-200 transition duration-200">
                        <Linkedin className="w-6 h-6 text-brown-600" />
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
};
export default ContactInfo;