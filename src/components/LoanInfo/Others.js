import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Accordion from "./Accordion";

const othersData = [
  {
    title: "Financial Planning",
    content: [
      "• Financial planning is a comprehensive process that helps individuals and families manage their finances effectively. ",
      "• It involves analyzing current financial situations, setting short-term and long-term financial goals, and developing strategies to achieve them.",
      "• Services may include budgeting, debt management, savings plans, and creating investment portfolios tailored to specific life objectives, such as buying a home, funding education, or securing retirement.",
    ],
  },
  {
    title: "Investment Advisory",
    content: [
      "• Investment advisory services provide professional guidance on selecting, managing, and monitoring investment options to maximize returns while minimizing risks.",
      "• Our advisors will help clients understand market trends, diversify their portfolios, and align investments with their financial goals.",
      "• These services can include guidance on stocks, bonds, mutual funds, real estate, and other assets to help clients achieve wealth growth and financial security.",
    ],
  },
  {
    title: "Tax Consulting",
    content: [
      "• Tax consulting services assist individuals and businesses in understanding and optimizing their tax obligations.",
      "• Our experts will provide advice on tax planning, compliance, and filing, ensuring adherence to laws while minimizing liabilities.",
      "• They can also help clients take advantage of deductions, credits, and exemptions, and provide strategies for effective financial structuring to reduce overall tax burdens.",
    ],
  },
  {
    title: "Retirement Solutions",
    content: [
      "• Retirement solutions focus on helping individuals plan for a financially secure and comfortable retirement.",
      "• These services include evaluating retirement goals, estimating future expenses, and identifying suitable savings plans such as IRAs, 401(k)s, or pension schemes.",
      "• Our advisors will guide clients on how to accumulate sufficient wealth during their working years and manage funds effectively post-retirement, ensuring a stable income throughout their golden years.",
    ],
  },
];

const Others = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <Navbar />
      <div className="max-w-4xl w-full pb-32 pt-32">
        <h1 className="text-3xl font-semibold text-center text-brown-800 mb-14">
          Other Services
        </h1>
        <Accordion data={othersData} />
      </div>
    </div>
  );
};

export default Others;
