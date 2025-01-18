import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Accordion from "./Accordion";

const homeLoanData = [
  {
    title: "Overview",
    content: [
      "• Home loan is a secured loan given to individuals who aspire to build or buy a house.",
      "• The property so purchased is mortgaged in the name of the lending institution as security, till the time the loan is fully repaid.",
      "• The lending institution will hold the original property-related documents till the time the loan is fully repaid along with the interest.",
      "• To buy a house, be it under construction, ready or resale property, the residence buyer can seek a loan from banks or financial institutions through financial advisors.",
      "• Diyora Consultancy has been working in this arena for several years as home loan advisors.",
      "• We have expertise in identifying the banks and institutions that offer the loan on the most friendly terms.",
      "• Till date, we have been instrumental in providing home loans to salaried individuals, self-employed, professionals, and NRIs to procure home loans at the best terms.",
      "• Our home loan advisors strive to provide you the home loan deals at the cheapest rate of interest.",
    ],
  },
  {
    title: "Required Documents",
    content: [
      "★ KYC Documents",
      "1. Pan Card",
      "2. Aadhar Card",
      "3. Passport Size Photos - 3",
      <br />,
      "★ Income Documents (Salaried)",
      "1. Salary Slips of Last 6 Months",
      "2. Form - 16 Last 2 Years",
      "3. All Bank Statements of 1 Year from Till Date",
      "4. Compnay ID Card Copy",
      "5. Job Offer Later Copy",
      <br />,
      "★ Income Documents (Self-Employeed/Business)",
      "1. Last 3 years IT-returns.",
      "2. Balance Sheet – Computation & Profit-loss.",
      "3. All Bank Statements of 1 Year from Till Date.(Current & Saving)",
      "4. GU-MAT-SA Dhara Certificate, Udhyog-Aadhar, GST Certi.",
      "5. Light-Bill of Business / Rent Agreement (If Rented)",
      "6. Property Paper Copy (Master File)",
      <br />,
      "★ Resident Documents",
      "1. Latest Light Bill Copy",
      "2. Rent Agreement (If Rented)",
      <br />,
      "★ For Currently Running all Loan (If any)",
      "1. Statement of Account Last Year",
      "2. Sanction Letter of Loan",
    ],
  },
  {
    title: "Loan Eligibility",
    content: [
      "★ For Salaried Individuals (Normal Profile)",
      "1. Indian citizenship is a must.",
      "2. Age should be between 21 to 55 years.",
      "3. Employment with Limited, Pvt. Ltd, Government, LLP, MNC, and certain other companies.",
      "4. Minimum 6 months with the current company and 3 years overall (exceptions for Cat A companies).",
      "5. Salary account required with ECS/NEFT salary credits.",
      "6. Deductions like PF, PT, TDS from salary are needed.",
      "7. CIBIL score of 700 or above.",
      <br />,
      "★ For Salaried Individuals (Affordable Profile)",
      "1. Indian citizenship is a must.",
      "2. Age should be between 21 to 55 years.",
      "3. Employment with Limited, Pvt. Ltd, Government, LLP, MNC, and certain other companies.",
      "4. Minimum 6 months with the current company and 3 years overall (exceptions for Cat A companies).",
      "5. ECS, NEFT, IMPS, or Bank Transfer salary credits, including cash salary.",
      "6. Minimum salary of Rs. 15,000/- (Rs. 25,000/- for cash salary).",
      "7. CIBIL score of 600 or above.",
      <br />,
      "★ For Self-Employed Individuals (Prime Profile)",
      "1. Minimum 4-year-old business (complete 3 financial years).",
      "2. Minimum turnover of more than Rs. 5 lakhs.",
      "3. Various business categories accepted.",
      "4. Loan amount calculation follows the DSTR calculator.",
      "5. 1-year-old current account required.",
      "6. Loan amount based on average IT Return of last two years.",
      "7. CIBIL score of 700 or above.",
      <br />,
      "★ For Self-Employed Individuals (Affordable Profile)",
      "1. Minimum 3-year-old business (complete 2 financial years).",
      "2. Minimum turnover of more than Rs. 5 lakhs.",
      "3. Multiple business categories accepted.",
      "4. 1-year-old current or savings account required.",
      "5. Average IT Return determines loan amount.",
      "6. CIBIL score of 600 or above. ",
    ],
  },
  {
    title: "Important Notes",
    content: [
      "✔ Self-Attestation Required: Please ensure that all necessary documents are self-attested by each individual separately.",
      "✔ Hardcopy Submission: Kindly submit all your documents in hardcopy format together.",
      "✔ Softcopy via Email: Additionally, please email us all the softcopies of the documents in PDF format to info@diyoraconsultancy.com",
      "✔ All Above Documents should be in Individual PDF or JPEG",
    ],
  },
  {
    title: "Tips",
    content: [
      "1. Multiple Quotes, Best Choice: Seek quotes from diverse vendors and banks. Analyze thoroughly to make the optimum selection.",
      "2. Listen to All Voices: Pay attention to every vendor's perspective. Unique insights can unlock valuable knowledge.",
      "3. Transparency Pays Off: Share your full financial background. Honesty aids in finding tailored solutions.",
      "4. Credit Story Matters: Discuss your credit history with vendors. This ensures accurate results and minimizes rejections.",
      "5. Politeness Prevails: Maintain a respectful attitude. A positive relationship is a long-term asset.",
      "6. Prepare Ahead: Arrange all documents and security cheques before applying. This proactive approach saves time.",
      "7. Stay Connected: Stay updated on your application's status by keeping in touch with vendors.",
      "8. Track Application Progress: Use the application number on the bank's website to stay informed about your loan journey.",
      "9. Cost Clarity: Understand all expenses related to your home loan upfront.",
      "10. Mortgage Insight: Determine whether registering a mortgage is mandatory. Opting for non-registration can reduce costs.",
      "11. Insurance Consideration: Check if Loan Protector, property, and life insurance are obligatory. Awareness of insurance policies is essential.",
      "12. Project Partnerships: Opt for banks or NBFCs with pre-approved projects. This eliminates property-related complications.",
    ],
  },
];

const HomeLoan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Navbar />
      <div className="max-w-4xl w-full pb-32 pt-32">
        <h1 className="text-3xl font-semibold text-center text-brown-800 mb-14">
          Home Loan
        </h1>
        <Accordion data={homeLoanData} />
      </div>
    </div>
  );
};

export default HomeLoan;
