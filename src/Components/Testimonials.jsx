import React from "react";
import TestimonialsCards from "./TestimonialsCards";
import ArrowUp from "./icons/ArrowUp";
// import TestimonialsCards from "./TestimonialsCards";
function Testimonials() {
  // Demo data for testimonials
  const testimonialsData = [
    { 
      title: "HAMMAD TURNED OUR BUSINESS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit dolor at eius suscipit laborum iste minima voluptatem, tempore, animi vel omnis. Tempore, ut.",
      userName: "John Doe",
      testimonialDescription: "CEO, Company A",
      cardNumber: "testimonial-card testimonial-1"
    },
    {
      title: "GREAT SERVICE AND SUPPORT",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus ratione nemo velit maiores dolore consequuntur, dignissimos rem minima voluptatem. Sequi, impedit.",
      userName: "Jane Smith",
      testimonialDescription: "Founder, Company B",
      cardNumber: "testimonial-card testimonial-2"
    },
    {
      title: "EXCELLENT RESULTS POTENTIALS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit dolor at eius suscipit laborum iste minima voluptatem, tempore, animi vel omnis . Tempore, ut.",
      userName: "Michael Johnson",
      testimonialDescription: "CTO, Company C",
      cardNumber: "testimonial-card testimonial-3"

    },
    {
      title: "HIGHLY RECOMMENDED WITH GOOD IDEAS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat? Soluta aspernatur enim weo suscipit, alias laboriosam debitis at autem quisquam.",
      userName: "Sarah Brown",
      testimonialDescription: "COO, Company D",
      cardNumber: "testimonial-card testimonial-4"

    },
  ];

  return (
    <div className="testimonials py-5">
      <div className="container my-5">
<<<<<<< HEAD
        <div className="testimonials-title d-flex mb-5">
=======
        <div className="testimonials-title d-flex">
>>>>>>> 50c671cd9764564782abf3cde29f6ad4ffaf1838
          <div>
            <h2 className="text-white">Testimonials</h2>
          </div>
          <div className="ms-auto d-flex">
            <span className="icon"></span>
            <button className="btn bg-transparent text-white border-0">
              <span className="icon rounded-circle bg-black p-1 me-2">
                <ArrowUp
                  style={{ width: "23px", color: "white",  }}
                />
              </span>
              All Testimonials
            </button>
          </div>
        </div>
<<<<<<< HEAD
        <div className="row mt-5 pt-3">
=======
        <div className="row mt-4">
>>>>>>> 50c671cd9764564782abf3cde29f6ad4ffaf1838
          {testimonialsData.map((testimonial, index) => (
            <TestimonialsCards
              key={index} // Ensure each card has a unique key
              title={testimonial.title}
              content={testimonial.content}
              userName={testimonial.userName}
              testimonialDescription={testimonial.testimonialDescription}
              className={testimonial.cardNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
