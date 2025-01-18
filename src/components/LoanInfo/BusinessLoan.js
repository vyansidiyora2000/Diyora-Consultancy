import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Accordion from "./Accordion";

const businessLoanData = [
  {
    title: "Overview",
    content: [
      "• Loan given to self-employed, professionals or company without any collateral security is called a business loan.",
      "• The sanction of business loan is based largely on the creditworthiness of the borrower and the firm. The bank or the financial institutions will first take a look at your firm’s and your credit score and analyze your credit rating before offering loan. They will also look at your financial statements for the past 3 years, bank statements, Nature of business, its current and expected returns and the market trend.",
      "• The loan amount could be from Rs. 50000 to Rs. 75 lac and the tenure would be between 1 to 3 years.",
      "• At Diyora Consultancy, we are the experts in helping you avail the best business loan with customer friendly terms.",
      "• Businesses need money for several reasons, right from working capital needs to expansion plans to opening up a new branch or for innovation in the existing business.",
    ],
  },
  {
    title: "Required Documents",
    content: [
      "★ KYC Documents",
      "1. Pan Card",
      "2. Aadhar Card",
      "3. Passport Size Photos - 3 Copy",
      <br />,
      "★ Income Documents",
      "1. Last 3 Years IT Returns",
      "2. Balance Sheet - Computatioin & Profit-loss",
      "3. All Bank Statements of 1 Year from Till Date.(Current & Saving)",
      "4. GU-MAT-SA Dhara Certificate, Udhyog Aadhar, GST Certificate",
      "5. Light Bill of Business/Rent Agrement (If Rented)",
      <br />,
      "★ Resident Documents",
      "1. Latest Light Bill Copy",
      "2. Rent Agreement (If Rented)",
    ],
  },
  {
    title: "Loan Eligibility",
    content: [
      "1. Diverse Options for Business Loans: When seeking a business loan, each bank offers varying interest rates, tenures, and criteria. Your loan amount and interest rate depend on your profile, encompassing factors like your company, take-home salary, average bank balance, designation, and CIBIL score. Banks usually grant loans based on multiples of your net take-home salary, typically ranging from 7 to 18 times.",
      "2. Consider the Balance Transfer Scheme: If you wish to relieve the burden of high interest rates or consolidate multiple EMIs into one, the Balance Transfer Scheme can be a game-changer. This scheme provides a chance to secure a new loan with lower interest rates and processing fees. By utilizing this scheme, you can manage a single EMI despite obtaining new funds.",
      "3. Discover Special Schemes: Every bank and NBFC offers unique policies for business loans, often considering different factors for eligibility. Special schemes cater to diverse situations, even accommodating those who may be overleveraged. These institutions frequently introduce new schemes featuring varying loan amounts, processing fees, and interest rates. It's advantageous to seize the right scheme promptly.",
      "4. Differentiating Prepayment and Regular Loans: In the market, there are loans with and without prepayment options, each having distinct interest rates. Choose between them based on your loan purpose, repayment capacity, savings strategy, and additional income sources. Deciding if you can make prepayments before the tenure concludes is crucial for optimizing your loan choice.",
      "5. Understanding Flat Rate and Reducing Rate: Differentiating between flat interest rates and reducing interest rates is pivotal. While they yield the same effective interest rate, the calculation method varies. A flat rate multiplied by 1.75 equals the reducing rate. For example, if the flat rate is 10%, the reducing rate would be 10% * 1.75 = 17.5% annually. This understanding ensures informed decisions and prevents misunderstandings caused by misinterpretations.",
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
const BusinessLoan = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Navbar />
      <div className="max-w-4xl w-full pb-32 pt-32">
        <h1 className="text-3xl font-semibold text-center text-brown-800 mb-14">
          Business Loan
        </h1>
        <Accordion data={businessLoanData} />
      </div>
    </div>
  );
};

export default BusinessLoan;
