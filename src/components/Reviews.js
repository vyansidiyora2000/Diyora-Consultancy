import React, { useState, useEffect } from 'react';
import { Star, Quote, Award, Shield, Clock, Sparkles } from 'lucide-react';

const Reviews = () => {
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Urvisha Mistry",
      date: "Oct 23, 2024",
      rating: 5,
      text: "We have consulted to prarvi consultancy for car loan, we were facing some issue for loan but akash patel from prarvi consultancy has supported us and guided us in a way where we got hassle free car loan on low rate of interest.",
      type: "Car Loan",
      highlight: "Hassle-free Process"
    },
    {
      name: "ALPESH GOHIL",
      date: "Sep 18, 2024",
      rating: 5,
      text: "As a customer of Prarvi Consultancy, I am extremely satisfied with the personal loan process handled by their team. The entire procedure was fast, accurate, and completely transparent. Their honesty and professionalism stood out, ensuring that everything went smoothly and efficiently. I highly recommend Prarvi Consultancy for anyone seeking financial services—they truly deliver with integrity and precision!",
      type: "Personal Loan",
      highlight: "Fast & Transparent"
    },
    {
      name: "Dhruvit Patel",
      date: "Sep 10, 2024",
      rating: 5,
      text: "I still can't believe the incredible experience I had with Prarvi Consultancy. As a final-year student at a university in London, I faced an almost impossible situation trying to secure a student loan. Most places told me that it wasn't possible to get a loan in the final year, as I should have applied during my first year. After hearing countless 'no's,' I contacted Prarvi Consultancy—and that's when everything changed.",
      type: "Education Loan",
      highlight: "Made impossible possible"
    },
    {
      name: "salman patel",
      date: "Aug 31, 2024",
      rating: 5,
      text: "After applied many consultant for an education loan but 2 time my loan refused and my friend suggest to apply loan through prarvi consultancy. Performance of the staff are very satisfied. Their behaviour are extremely good and anytime they help via calling and WhatsApp. Their guidance are helpful and i got my education loan easily without any disturbance.",
      type: "Education Loan",
      highlight: "24/7 Support"
    },
    {
      name: "kamil saiyed",
      date: "Aug 7, 2024",
      rating: 5,
      text: "Genuine consultant people. They helped to apply for my education loan and gave me the right advice to make my file strong. My father was a farmer without ITR and I didn't have my own house. But somehow my loan got approved. I got my loan amount within 1.5 months.",
      type: "Education Loan",
      highlight: "Expert Guidance"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.testimonial-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const RatingStars = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index}
          size={20}
          className={`transform transition-all duration-500 
            ${index < rating 
              ? "text-amber-500 fill-amber-500 scale-110" 
              : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  const StatCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-4 shadow-lg">
      <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-xl text-white">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-50 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block animate-bounce">
            <Sparkles className="text-amber-600 mb-4" size={32} />
          </div>
        
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have experienced our exceptional service and achieved their financial goals.
          </p>
          
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <StatCard icon={Award} title="Success Rate" value="99.9%" />
            <StatCard icon={Shield} title="Trusted Clients" value="10,000+" />
            <StatCard icon={Clock} title="Quick Processing" value="24-48 hrs" />
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              id={`card-${index}`}
              key={index}
              className={`testimonial-card transform transition-all duration-1000 
                ${isVisible[`card-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div className="group relative overflow-hidden bg-white/80 backdrop-blur-lg rounded-2xl p-8
                hover:shadow-2xl hover:shadow-amber-200/20 transition-all duration-500
                hover:-translate-y-2 border border-amber-100">
                {/* Highlight badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-700
                  text-white text-sm px-4 py-1 rounded-full transform rotate-12
                  group-hover:rotate-0 transition-transform duration-500">
                  {testimonial.highlight}
                </div>

                {/* Quote icon */}
                <Quote 
                  size={120} 
                  className="absolute -bottom-8 -right-8 text-amber-100 opacity-30
                    group-hover:scale-110 transition-transform duration-500"
                />

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium
                    bg-amber-100 text-amber-800 mb-6">
                    {testimonial.type}
                  </span>

                  <RatingStars rating={testimonial.rating} />

                  <p className="mt-6 text-gray-700 leading-relaxed line-clamp-4
                    group-hover:line-clamp-none transition-all duration-500">
                    {testimonial.text}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Experience the difference with Diyora Consultancy</p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white 
            px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-amber-200 
            transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;