import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        submitted: false,
        loading: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState(prev => ({ ...prev, loading: true }));

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setFormState(prev => ({ ...prev, submitted: true, loading: false }));

        setTimeout(() => {
            setFormState({
                name: '',
                email: '',
                message: '',
                submitted: false,
                loading: false
            });
        }, 3000);
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-8">
            {formState.submitted ? (
                <div className="bg-brown-50 text-brown-800 p-6 rounded-xl text-center space-y-4">
                    <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Thank you for your message!</h3>
                    <p className="text-brown-600">We'll be in touch with you shortly.</p>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-6 text-brown-800">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition duration-200"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition duration-200"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                value={formState.message}
                                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition duration-200"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={formState.loading}
                            className="w-full bg-brown-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-brown-700 focus:ring-4 focus:ring-brown-200 transition duration-200 flex items-center justify-center"
                        >
                            {formState.loading ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactForm;
