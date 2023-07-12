import React from "react";
import "./sectionsix.css";
import User1IMG from "../../assets/User1.png";
import User2IMG from "../../assets/User2.png";
import User3IMG from "../../assets/User3.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const data = [
  {
    paragraph:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    image: User1IMG,
    name: "Regina Miles",
    work: "Designer",
  },
  {
    paragraph:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    image: User2IMG,
    name: "Regina Miles",
    work: "Designer",
  },
  {
    paragraph:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    image: User3IMG,
    name: "Regina Miles",
    work: "Designer",
  },
];

const SectionSix = () => {
  return (
    <section id="section6">
      <div className="container row__container">
        <div className="head">
          <h6>Practice Advice</h6>
          <h2>Every Client Matters</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="boxs">
          {data.map((card, index) => (
            <article key={index} className="box">
              <div className="rated">
                <AiFillStar className="star fill__star" />
                <AiFillStar className="star fill__star" />
                <AiFillStar className="star fill__star" />
                <AiFillStar className="star fill__star" />
                <AiOutlineStar className="star empty__star" />
              </div>
              <div className="paragraph">
                <p>{card.paragraph}</p>
              </div>
              <div className="user">
                <div className="user__image">
                  <img src={card.image} alt="" />
                </div>
                <div className="user__info">
                  <div className="user__name">
                    <h6>{card.name}</h6>
                  </div>
                  <div className="user__work">
                    <p>{card.work}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
