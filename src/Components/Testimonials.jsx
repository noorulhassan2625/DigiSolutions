import React from "react";
import TestimonialsCards from "./TestimonialsCards";
// import TestimonialsCards from "./TestimonialsCards";

function Testimonials() {
  // Demo data for testimonials
  const testimonialsData = [
    {
      title: "HAMMAD TURNED OUR BUSINESS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit dolor at eius suscipit laborum iste minima voluptatem, tempore, animi vel omnis. Tempore, ut.",
      userName: "John Doe",
      testimonialDescription: "CEO, Company A"
    },
    {
      title: "GREAT SERVICE AND SUPPORT",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus ratione nemo velit maiores dolore consequuntur, dignissimos rem minima voluptatem. Sequi, impedit.",
      userName: "Jane Smith",
      testimonialDescription: "Founder, Company B"
    },
    {
      title: "EXCELLENT RESULTS POTENTIALS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit dolor at eius suscipit laborum iste minima voluptatem, tempore, animi vel omnis . Tempore, ut.",
      userName: "Michael Johnson",
      testimonialDescription: "CTO, Company C"
    },
    {
      title: "HIGHLY RECOMMENDED WITH GOOD IDEAS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat? Soluta aspernatur enim officia distinctio suscipit, alias laboriosam debitis at autem quisquam.",
      userName: "Sarah Brown",
      testimonialDescription: "COO, Company D"
    }
  ];

  return (
    <div className="testimonials py-5">
    <div className="container my-5">
      <div className="heading-title d-flex">
        <div>
        <h2>Testimonials</h2>
        <hr className="custom-hr ms-0 w-100" />
        </div>
        <div className="ms-auto">
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
      <div className="row mt-4">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsCards
            key={index} // Ensure each card has a unique key
            title={testimonial.title}
            content={testimonial.content}
            userName={testimonial.userName}
            testimonialDescription={testimonial.testimonialDescription}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Testimonials;
