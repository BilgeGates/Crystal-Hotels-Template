import React from "react";
import "./sectionfive.css";
import { FiCheck } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

const data = [
  {
    type: "Free",
    sec: "Organize across all apps by hand",
    price: "19$",
    price_time: "Per Month",
    desc: "Slate helps you see how many more days you need...",
    product_1: "Unlimited product updates",
    product_2: "Unlimited product updates",
    product_3: "Unlimited product updates",
    product_4: "1GB  Cloud storage",
    product_5: "Email and community support",
  },
  {
    type: "Free",
    sec: "Organize across all apps by hand",
    price: "19$",
    price_time: "Per Month",
    desc: "Slate helps you see how many more days you need...",
    product_1: "Unlimited product updates",
    product_2: "Unlimited product updates",
    product_3: "Unlimited product updates",
    product_4: "1GB  Cloud storage",
    product_5: "Email and community support",
  },
  {
    type: "Free",
    sec: "Organize across all apps by hand",
    price: "19$",
    price_time: "Per Month",
    desc: "Slate helps you see how many more days you need...",
    product_1: "Unlimited product updates",
    product_2: "Unlimited product updates",
    product_3: "Unlimited product updates",
    product_4: "1GB  Cloud storage",
    product_5: "Email and community support",
  },
];

const SectionFive = () => {
  return (
    <section id="section5">
      <div className="container row__container">
        <div className="head">
          {" "}
          <h6>Practice Advice</h6>
          <h2>Get Quality Education</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="cards">
          {data.map((card, index) => (
            <article key={index} className="card">
              <div className="new">New</div>
              <div className="custom__details">
                <div className="card__icon">
                  <AiFillHeart className="icon" />
                </div>
                <h3 className="type">{card.type}</h3>
                <h6>{card.sec}</h6>
                <div className="price">
                  <h2>{card.price}</h2>
                  <h6>{card.price_time}</h6>
                </div>
                <p>{card.desc}</p>
                <button>Try for free</button>
              </div>
              <div className="features__list">
                <div className="terms__head">
                  <div className="terms__icon">
                    <FiCheck className="check" />
                  </div>
                  <div className="terms">{card.product_1}</div>
                </div>
                <div className="terms__head">
                  <div className="terms__icon">
                    <FiCheck className="check" />
                  </div>
                  <div className="terms">{card.product_2}</div>
                </div>
                <div className="terms__head">
                  <div className="terms__icon">
                    <FiCheck className="check" />
                  </div>
                  <div className="terms">{card.product_3}</div>
                </div>
                <div className="terms__head">
                  <div className="terms__icon">
                    <FiCheck className="check gray__check" />
                  </div>
                  <div className="terms">{card.product_4}</div>
                </div>
                <div className="terms__head">
                  <div className="terms__icon">
                    <FiCheck className="check gray__check" />
                  </div>
                  <div className="terms">{card.product_5}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
