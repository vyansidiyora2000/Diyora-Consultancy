import React from 'react';
import { BarChart2, TrendingUp, FileText, PiggyBank } from 'lucide-react';

const services = [
    {
        title: 'Financial Planning',
        description: 'Comprehensive financial planning services to help you achieve your financial goals.',
        icon: <BarChart2 className="w-8 h-8 text-brown-600" />,
        features: ['Budget Planning', 'Debt Management', 'Financial Goals']
    },
    {
        title: 'Investment Advisory',
        description: 'Expert advice on investment strategies tailored to your risk tolerance and objectives.',
        icon: <TrendingUp className="w-8 h-8 text-brown-600" />,
        features: ['Portfolio Management', 'Risk Assessment', 'Market Analysis']
    },
    {
        title: 'Tax Consulting',
        description: 'Professional tax consulting services to optimize your tax situation and ensure compliance.',
        icon: <FileText className="w-8 h-8 text-brown-600" />,
        features: ['Tax Planning', 'Compliance Support', 'Deduction Optimization']
    },
    {
        title: 'Retirement Solutions',
        description: 'Guidance on retirement planning to secure your financial future.',
        icon: <PiggyBank className="w-8 h-8 text-brown-600" />,
        features: ['Retirement Planning', 'Pension Advice', 'Investment Strategies']
    },
];

const Services = () => {
    return (
        <section className="py-12 bg-gray-50 rounded-lg shadow-md">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-brown-50 rounded-lg">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-brown-700">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li 
                                        key={idx}
                                        className="flex items-center text-sm text-gray-600"
                                    >
                                        <span className="w-1.5 h-1.5 bg-brown-600 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-4 text-brown-600 hover:text-brown-800 text-sm font-medium transition-colors duration-300">
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;