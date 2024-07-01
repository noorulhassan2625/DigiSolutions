import React from "react";
import FAQsContent from "./FAQsContent";
import FAQForm from "./FAQForm";

function FAQs() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
      faqNumber: "faq-1"
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, we will send you a confirmation email that includes a tracking number.",
      faqNumber: "faq-2"
    },
    {
      question: "Can I purchase items again?",
      answer: "Yes, items purchased online can be bought again. Just go to your order history and select the items you wish to purchase again.",
      faqNumber: "faq-3"
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 200 countries worldwide. Shipping fees and delivery times vary depending on the destination.",
      faqNumber: "faq-4"
    },
  ];

  return (
    <div className="faq container-fluid my-5">
<<<<<<< HEAD
      <div className="faq-title px-5 py-4 text-capitalized rounded text-white mb-4">
        <h3>Frequently Asked Questions</h3>
        {/* <hr className="custom-hr w-25" /> */}
      </div>  
=======
      <div className="faq-title px-5 py-4 text-capitalized rounded text-white">
        <h3>Frequently Asked Questions</h3>
        {/* <hr className="custom-hr w-25" /> */}
      </div>
>>>>>>> 50c671cd9764564782abf3cde29f6ad4ffaf1838
      <div className="row">
        <div className="col-md-6">
          <FAQsContent faqs={faqs}  />
        </div>
        <div className="col-md-6">
          <FAQForm/>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
