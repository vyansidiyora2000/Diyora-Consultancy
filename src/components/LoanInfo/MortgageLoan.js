import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Accordion from "./Accordion";

const mortgageLoanData = [
  {
    title: "Overview",
    content: [
      "• Mortgage loans offer a unique set of advantages that can make a real difference in your financial life. With extended repayment terms, competitive interest rates, higher loan amounts, and potential tax benefits, these loans have become a sought-after solution for various financial needs.",
      "• The versatility of mortgage loans allows you to pursue a range of goals. Whether you're planning to expand your business, renovate your home, cover medical expenses, or consolidate debts, mortgage loans provide the means to achieve your ambitions without immediate financial strain.",
      "• However, it's important to recognize that mortgage loan eligibility criteria vary among different banks and non-banking financial companies (NBFCs). Nationalized banks typically provide up to 55% of the property's market value (excluding SME or project loans), while multinational banks might extend up to 65%, and NBFCs could offer as much as 75%. Interest rates also differ, giving you a diverse array of choices.",
      "• Mortgage loans offer flexible repayment terms, ranging from 5 to 15 years, allowing you to tailor the loan to your financial capacity and age. Furthermore, you have the freedom to restructure your mortgage loan by making part payments or additional contributions, giving you control over your financial journey. After completing 12 EMIs, many banks and NBFCs offer top-up loans based on the property's market value and your financial ability.",
      "• Floating rate schemes are the standard for mortgage loans. Recent regulatory changes mean that fixed-rate mortgage loans for the entire tenure are no longer offered. Instead, floating rates tied to the base rate prevail. This means that any modifications announced by the RBI directly impact your mortgage loan interest rate, causing it to either decrease or increase.",
      "• It's important to be aware that pre-closure of mortgage loans may come with conditions. If you opt to prepay using your own funds, a 2% penalty may apply. If you choose to transfer the loan to another financial institution, an additional 2% penalty could be imposed based on the company's internal policy.",
      "• In the realm of finance, mortgage loans serve as a conduit for achieving your financial aspirations. Whether you're striving to grow your business, enhance your living space, or embark on a new journey, mortgage loans provide the flexibility and support you need to realize your dreams.",
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
      "★ For Salaried Individuals",
      "1. Indian citizenship is a must.",
      "2. Age should be between 21 to 65 years.",
      "3. Should have a minimum work experience of 6 months in the current company and a total of 3 years overall. However, if the applicant works with a Category A company, stability is not strictly necessary.",
      "4. Possession of a salary account is mandatory.",
      "5. If working with a Super Category A company, the minimum monthly take-home salary required is Rs. 20,000 and above. For Category A or any listed company in the bank's approved list, the minimum required take-home salary is Rs. 25,000 and above per month. For those employed in small Pvt. Ltd companies or the government sector, the minimum required take-home salary is also Rs. 25,000 and above per month.",
      "6. Residence could be owned, rented, or provided by the company.",
      "9. Postpaid mobile connection may be necessary for certain banks.",
      <br />,
      "★ For Self-Employed Individuals",
      "1. Business must be at least 4 years old.",
      "2. Minimum annual turnover should exceed 25 lakhs.",
      "3. A current account with a history of at least 1 year is mandatory. The loan amount calculation is based on the Financial Obligation Ratio (FOR) calculator.",
      "4. Loan amount is determined by the average Income Tax Return of the last two years.",
      "5. Proof of business registration such as Shop Establishment, VAT, CST, and GST turnover is required. The IT Return must show an increase compared to the previous year.",
      "6. Inward cheque returns should not exceed 2% of total transactions.",
      "7. Banking transactions should not constitute more than 30% of the total turnover.",
      "!! Important Note !!",
      "The eligibility criteria for mortgage loans can vary between different banks and NBFCs. Some institutions may allow deviations from these rules and offer mortgage loans even with less stringent documentation.",
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

const MortgageLoan = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Navbar />
      <div className="max-w-4xl w-full pb-32 pt-32">
        <h1 className="text-3xl font-semibold text-center text-brown-800 mb-14">
          Mortgage Loan
        </h1>
        <Accordion data={mortgageLoanData} />
      </div>
    </div>
  );
};

export default MortgageLoan;
