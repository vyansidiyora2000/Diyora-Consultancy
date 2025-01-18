import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Accordion from "./Accordion";

const educationLoanData = [
  {
    title: "Overview",
    content: [
      "• Education is the key to unlocking opportunities and shaping a better future. However, the financial burden of education expenses can sometimes hinder these aspirations. This is where education loans step in, serving as a bridge that connects students to the world of learning without immediate financial constraints.",
      "• An education loan is a powerful financial tool offered by banks and financial institutions, designed to provide students with the necessary funds to pursue their academic dreams. These loans cover a wide range of expenses, including tuition fees, study materials, accommodation, and other educational essentials. What's remarkable is that education loans recognize the financial challenges students often face while pursuing higher education.",
      "• In India, education loans are governed by laws and regulations that ensure fairness and accessibility. The government has introduced initiatives like the Central Scheme for Interest Subsidy (CSIS) and the Vidyalakshmi Education Loan Portal to make education loans more affordable and attainable.",
      "• One standout feature is the moratorium period, a period of time after loan disbursement and lasting until after the completion of studies. During this time, borrowers are not required to make any repayments, allowing students to fully concentrate on their studies without financial stress.",
      "• According to Indian law, education loans cover various levels of education, including undergraduate, postgraduate, vocational, and professional courses. The loan amount can cover a significant portion of the total course fees and related expenses. Moreover, borrowers often benefit from flexible repayment terms that start after the moratorium period concludes.",
      "• Remember, an education loan isn't just about finances—it's an investment in your future. By gaining access to quality education, you're equipping yourself with the tools to contribute to society and reach your full potential. As you embark on your educational journey, consider education loans as your partners in progress, enabling you to embrace knowledge, opportunity, and a brighter tomorrow.",
    ],
  },
  {
    title: "Required Documents",
    content: [
      "★ Student Documents",
      "1. Passport Size Photo - 1 Copy",
      "2. Passport",
      "3. Pan card",
      "4. Aadhar card (front & back)",
      "5. 10th & 12th Mark sheet",
      "6. Graduate all Semester Mark sheets with Degrees certificate",
      "7. IELTS Score / MOI / PTE / TOFFEL Score card",
      "8. Offer Letter",
      "9. Latest Light Bill of Home",
      "10. Mobile Number & Email ID",
      <br />,
      "★ Co-Applicant (If Business Profile)",
      "1. Passport Size Photo - 1 Copy",
      "2. Pan card",
      "3. Aadhar Card",
      "4. Latest Light Bill (Home & Office)",
      "5. Business Proof",
      "6. Last 2 Years ITR with Balance sheet and profit & loss",
      "7. Last 8 months bank statement(Saving & Current A/C)",
      "8. Mobile Number & Email ID",
      <br />,
      "★ Co-Applicant (If Salaried Profile)",
      "1. Passport Size Photo - 1 Copy",
      "2. Pan card",
      "3. Aadhar Card",
      "4. Latest Light Bill of Home",
      "5. Job Appointment Letter",
      "6. Job ID card",
      "7. Last 3 Months Salary Slips",
      "8. Bank Statement Last 8 Month(Salary A/C)",
      "9. Last 2 Years Form -16",
      "10. Mobile Number & Email ID",
      <br />,
      "★ Father & Mother Documents",
      "1. Pan card",
      "2. Aadhar Card",
      "3. Mobile Number & Email ID",
      <br />,
      "★ Two References",
      "1. Name",
      "2. Full Address with Pincode",
      "3. Occupation (Salaried or Business Profile)",
      "4. Mobile Number & Email ID",
      <br />,
      "★ Resident Documents",
      "1. Latest Light Bill Copy",
      "2. Rent Agreement (If Rented)",
    ],
  },
  {
    title: "Loan Eligibility",
    content: [
      "1. Citizenship: The student should be an Indian citizen to qualify for an education loan.",
      "2. Age: Generally, the student's age should fall within a specified range, often between 16 to 35 years. This can vary based on the lender's policies.",
      "3. Course and Institution: The educational course and institution should be recognized by relevant government authorities or regulatory bodies. Loans are usually available for various courses, including undergraduate, postgraduate, technical, vocational, and professional courses.",
      "4. Loan Amount: The loan amount can cover Tuition fees, examination fees, library fees, laboratory fees, cost of books, equipment, living costs, flight tickets, essential technical equipment (e.g., laptops), insurance for overseas students.",
      "5. Co-Borrower: In most cases, a parent, guardian, or any blood relative, such as a father, mother, brother, or sister, may act as a co-borrower for the loan. The co-borrower should have a stable source of income to support the repayment process.",
      "6. Academic Performance: Some banks may consider the student's academic performance as a criterion for eligibility. A certain minimum percentage of marks in the qualifying exams may be required.",
      "7. Collateral or Security: Depending on the loan amount, collateral or security may be required. For lower loan amounts, collateral might not be mandatory.",
      "8. Repayment Capacity: The borrower's and co-borrower's financial stability and repayment capacity play a crucial role in loan approval. Income and employment stability are often considered.",
      "9. Credit History: The loan amount can cover tuition fees, examination fees, library fees, laboratory fees, cost of books, equipment, and other necessary expenses for the course.",
      "10. Admission Confirmation: Lenders may require a confirmed admission offer from a recognized institution before approving the loan.",
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

const EducationLoan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Navbar />
      <div className="max-w-4xl w-full pb-32 pt-32">
        <h1 className="text-3xl font-semibold text-center text-brown-800 mb-14">
          Education Loan
        </h1>
        <Accordion data={educationLoanData} />
      </div>
    </div>
  );
};

export default EducationLoan;
