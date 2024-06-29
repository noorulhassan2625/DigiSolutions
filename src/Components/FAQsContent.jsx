import React from "react";

function FAQsContent({ faqs }) {
  return (
    <div className="accordion mt-4" id="faqAccordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#faqAccordion"
          >
            <p className="accordion-body mb-0">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQsContent;
