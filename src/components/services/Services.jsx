import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* Services1 */}
        <article className="service">
          <div className="service">
            <div className="service__head">
              <h3>Landing Page</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>

        {/* Services 2 */}
        <article className="service">
          <div className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck className="service__icon" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
