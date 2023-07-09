import React from "react";
import "./sectionfour.css";
import Sale1IMG from "../../assets/sale1.png";
import Sale2IMG from "../../assets/sale2.png";
import Sale3IMG from "../../assets/sale3.png";
import { ImStarFull } from "react-icons/im";
import Icons from "./Icons";
import { AiOutlineDownload } from "react-icons/ai";

const data = [
  {
    image: Sale1IMG,
    category: "Training Courses",
    star: "4.9",
    title: "Watch our Courses",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sec: "15 Sales",
    price_sec_1: "$16.48",
    price_sec_2: "$6.48",
  },
  {
    image: Sale2IMG,
    category: "Training Courses",
    star: "4.9",
    title: "Video in Live Action",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sec: "15 Sales",
    price_sec_1: "$16.48",
    price_sec_2: "$6.48",
  },
  {
    image: Sale3IMG,
    category: "2,769 online courses	",
    star: "4.9",
    title: "Approdable Packages",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sec: "15 Sales",
    price_sec_1: "$16.48",
    price_sec_2: "$6.48",
  },
];

const SectionFour = () => {
  return (
    <section id="section4">
      <div className="container row__container">
        <div className="head">
          <h6>Practice Advice</h6>
          <h2>Every Client Matters</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="cards">
          {data.map((card, index) => (
            <article key={index} className="card">
              <div className="card__img">
                <h6>Sale</h6>
                <img src={card.image} alt="" />
                <Icons />
              </div>
              <div className="card__info">
                <div className="card__category">
                  <a href="#">{card.category}</a>
                  <div className="star">
                    <div>
                      <ImStarFull className="icon__star" />
                    </div>
                    <div className="raiting">4.9</div>
                  </div>
                </div>
                <div className="card__title">
                  <h5>{card.title}</h5>
                </div>
                <div className="card__desc">
                  <p>{card.description}</p>
                </div>
                <div className="card__sales">
                  {" "}
                  <div>
                    <AiOutlineDownload className="sales__icon" />
                  </div>
                  <h6>15 Sales</h6>
                </div>
                <div className="sec">
                  <h5 className="sec__1">{card.price_sec_1}</h5>
                  <h5 className="sec__2">{card.price_sec_2}</h5>
                </div>
                <button>
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2685_5634)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780065 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780065 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16123 9.06959 8.23599C9.03857 8.31074 8.9931 8.37864 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994896 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                        fill="#FF6551"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2685_5634">
                        <rect
                          width="9"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
