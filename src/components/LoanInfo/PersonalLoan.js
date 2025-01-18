import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Accordion from "./Accordion";

const personalLoanData = [
  {
    title: "Overview",
    content: [
      "• Personal Loan is a collateral free loan based on income documents of individual or company. Since this is an unsecured loan thus the borrowers past track records of loans & credit score has to be good.",
      "• Personal loan processing is very easy as it required less documents as compare to any secured loan but it always attracts high rate of interest & shorter repayment period.",
      "• Any financial institutional look for credit score & income because they are not your friend and it is strictly a business transaction, therefore your good income documents & credit score will help lander to land the money.",
      "• Personal Loan can only be availed for any valid purpose, be it a wedding expenditure, a holiday or purchasing consumer durables, the personal loan is very handy & caters to all your needs. The amount of loan can be ranged from Rs. 50,000 – Rs. 30 Lac & the tenure for repaying the loan varies from 1 to 5 years.",
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
      "★ Resident Documents",
      "1. Latest Light Bill Copy",
      "2. Rent Agreement (If Rented)",
    ],
  },
  {
    title: "Loan Eligibility",
    content: [
      "★ For Salaried Individuals",
      "1. Indian citizenship is a must.",
      "2. Age should be between 21 to 65 years.",
      "3. Employed with the current company for at least 6 months, and overall work experience of 1 years. Stability criteria may not apply to those working with top-tier companies.",
      "4. Possession of a salary account is mandatory.",
      "5. Some banks consider highly educated or employees of super category A companies, even if it's their first or third job.",
      "6. Minimum take-home salary varies: Rs.13,000 and above per month for Super Cat A, Rs.20,000 and above per month for Cat A or listed companies, and Rs.20,000 and above per month for small Pvt. Ltd companies or government sector.",
      "7. Minimum education requirement is 12th pass.",
      "8. Residence could be owned, rented, or provided by the company. For renters, permanent ownership address proof from any city or village in India is needed.",
      "9. Postpaid mobile connection may be necessary for certain banks.",
      <br />,
      "★ For Self-Employed Individuals",
      "1. Business must be at least 2 years old.",
      "2. Minimum annual turnover should exceed 25 lakhs.",
      "3. Possession of a current account for at least 1 year, with average bank balance equal to the EMI amount for the new loan.",
      "4. Loan amount calculation follows the DSTR calculator.",
      "5. Maximum loan amount is twice the average IT Return of the last two years.",
      "6. Business registration documents, such as Shop Establishment, VAT, CST, and GST, are required. Turnover and IT Return should show growth compared to the previous year.",
      "7. No EMI bounce allowed in the last 3 months, and only 1 bounce allowed in the last 6 months.",
      "8. Inward cheque returns should not exceed 2% of total transactions.",
      "9. Banking should not account for more than 30% of total turnover.",
      "10. Both rented residential and office properties are not accepted as collateral.",
      "11. Recent loans taken within the last 3 months may affect eligibility.",
    ],
  },
  {
    title: "Important Notes",
    content: [
      "✔ Submit Currently Running Loan Statement of account (If Any).",
      "✔ Submit all Documents in Hardcopy Togather.",
      "✔ Also Mail US all Softcopy on PDF File on info@diyoraconsultancy.com",
    ],
  },
  {
    title: "Tips",
    content: [
      "1. Compare and Choose: Obtain loan quotes from different banks and lenders, then analyze and select the best option for you.",
      "2. Listen and Learn: Pay attention to what various vendors have to say. You might discover new insights that you weren't aware of.",
      "3. Honesty Matters: Be transparent about any negative aspects of your financial history with the vendors. This helps them guide you towards the right choices.",
      "4. Credit History Conversation: Discuss your complete credit history with the vendors. This enables them to provide accurate solutions and avoid potential rejections.",
      "5. Politeness Pays: Maintain a respectful attitude with the vendors. Building a good rapport can lead to more beneficial and lasting relationships.",
      "6. Preparation Pays Off: Gather all your documentation and security cheques before applying for a personal loan. This proactive approach saves you time and ensures a smoother process.",
      "7. Stay Connected: Keep in touch with your vendors until you receive a definitive status update on your loan application. Open communication helps you stay informed.",
      "8. Track Your Progress: Use your application number to monitor the status of your loan application on the bank's website. This keeps you informed every step of the way.",
    ],
  },
];

const PersonalLoan = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Navbar />
      <div className="max-w-4xl w-full pb-32 pt-32">
        <h1 className="text-3xl font-semibold text-center text-brown-800 mb-14">
          Personal Loan
        </h1>
        <Accordion data={personalLoanData} />
      </div>
    </div>
  );
};

export default PersonalLoan;
