import React from "react";
import FAQsContent from "./FAQsContent";
import FAQForm from "./FAQForm";

function FAQs() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, we will send you a confirmation email that includes a tracking number.",
    },
    {
      question: "Can I purchase items again?",
      answer: "Yes, items purchased online can be bought again. Just go to your order history and select the items you wish to purchase again.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 200 countries worldwide. Shipping fees and delivery times vary depending on the destination.",
    },
  ];

  return (
    <div className="faq container my-5">
      <div className="title">
        <h3>Frequently Asked Questions</h3>
        <hr className="custom-hr w-25" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <FAQsContent faqs={faqs} />
        </div>
        <div className="col-md-6">
          <FAQForm/>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
