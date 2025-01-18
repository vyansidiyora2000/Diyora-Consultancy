import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center p-4 border ${
              activeIndex === index ? "bg-brown-100" : "bg-white"
            } text-left shadow rounded transition-all duration-300 focus:outline-none`}
          >
            <span className="text-lg font-medium text-brown-700">
              {item.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-45" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-brown-50 border border-t-0 border-brown-200 text-brown-700 rounded-b">
              {Array.isArray(item.content) ? (
                <ul className="list-none pl-6 space-y-2">
                  {item.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
