import React from "react";
import { Landmark, Home, Building, Wallet, Package, House } from "lucide-react"; // Replace Bank with House
import { Link } from "react-router-dom";

const services = [
  {
    title: "Education Loan",
    description:
      "Education loans available for higher studies in India & abroad. We have 15+ total lenders as government banks, private banks & NBFCs & international lenders.",
    icon: <Landmark className="w-8 h-8 text-brown-600" />,
    features: [
      "Higher Studies in India",
      "Study Abroad",
      "Loan Balance Transfer",
    ],
    link: "/education-loan",
  },
  {
    title: "Home Loan",
    description:
      "Avail Loan for purchasing a new home, renovation of existing home, built home on own plot, purchase a plot, Extend current home.",
    icon: <Home className="w-8 h-8 text-brown-600" />,
    features: ["New Home Purchase", "Home Renovation", "Plot Purchase"],
    link: "/home-loan",
  },
  {
    title: "Business Loan",
    description:
      "Grow your Business by giving it Financial boost. Loan Like Term Loans, MSME, Machinery Loans, Equipment Finance fall under Business Category.",
    icon: <Building className="w-8 h-8 text-brown-600" />,
    features: ["Term Loans", "MSME Loans", "Equipment Finance"],
    link: "/business-loan",
  },
  {
    title: "Personal Loan",
    description:
      "Complete your any legitimate financial need with Least Documentation. You can choose based on your need and repay as soon as you can.",
    icon: <Wallet className="w-8 h-8 text-brown-600" />,
    features: [
      "Instant Personal Loan",
      "Short-Term Loan",
      "Personal Loan Top-Up",
    ],
    link: "/personal-loan",
  },
  {
    title: "Mortgage Loan",
    description:
      "Get a secured loan that allows you to avail funds by providing an immovable asset, such as a house or commercial property, as collateral to the lender.",
    icon: <House className="w-8 h-8 text-brown-600" />, // Use House icon with brown color
    features: ["Property Collateral", "Competitive Rates", "Flexible Terms"],
    link: "/mortgage-loan",
  },
  {
    title: "Other Services",
    description:
      "Other Loans like SMEs, Top Up Loans, Plot Loans, Home Loan For Pensioners, Flexipay Home Loan, Rural Housing Loan, Pradhan Mantri Awas Yojana and more.",
    icon: <Package className="w-8 h-8 text-brown-600" />, // Update color to brown
    features: ["SME Loans", "Rural Housing", "PMAY Schemes"],
    link: "/other-services",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <p className="text-lg text-brown-600">
            We Are Providing Top Services With Excellent Performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brown-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-brown-50 rounded-lg">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-900">
                {service.title}
              </h3>
              <p className="text-brown-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-brown-600"
                  >
                    <span className="w-1.5 h-1.5 bg-brown-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="mt-4 inline-block text-brown-600 hover:text-brown-800 text-sm font-medium transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
