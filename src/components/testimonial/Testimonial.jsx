import React from "react";
import "./testimonial.css";
import CLI1 from "../../assets/team1.jpg";
import CLI2 from "../../assets/team2.jpg";
import CLI3 from "../../assets/team3.jpg";
import CLI4 from "../../assets/team4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: CLI1,
    names: "Barbara",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorum vel totam, deleniti asperiores enim consequuntur, libero debitis quasi repellendus doloremque atque aspernatur repellat ducimus aliquam quam dolores voluptate cumque.",
  },
  {
    id: 2,
    image: CLI2,
    names: "Theodore",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorum vel totam, deleniti asperiores enim consequuntur, libero debitis quasi repellendus doloremque atque aspernatur repellat ducimus aliquam quam dolores voluptate cumque.",
  },
  {
    id: 3,
    image: CLI3,
    names: "Abigail",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorum vel totam, deleniti asperiores enim consequuntur, libero debitis quasi repellendus doloremque atque aspernatur repellat ducimus aliquam quam dolores voluptate cumque.",
  },
  {
    id: 4,
    image: CLI4,
    names: "Bruno",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorum vel totam, deleniti asperiores enim consequuntur, libero debitis quasi repellendus doloremque atque aspernatur repellat ducimus aliquam quam dolores voluptate cumque.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, names, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__image">
                <img src={image} alt={names} />
              </div>
              <h5 className="client__name">{names}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
