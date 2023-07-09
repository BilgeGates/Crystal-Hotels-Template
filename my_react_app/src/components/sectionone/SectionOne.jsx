import React from "react";
import "./sectionone.css";
import HotelIMG from "../../assets/hotel.png";

const SectionOne = () => {
  return (
    <section id="section1">
      <div className="container row__container">
        <div className="col">
          <img src={HotelIMG} alt="" />
          <svg
            width="116"
            height="138"
            viewBox="0 0 116 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="vector"
          >
            <path d="M0 0H116V138H0V0Z" fill="#B6D7FF" />
          </svg>
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ellipse"
          >
            <circle cx="29.5" cy="29.5" r="29.5" fill="#FEB896" />
          </svg>
        </div>
        <div className="col">
          <div className="restangle"></div>
          <h2>We are glad to see you among our clients!</h2>
          <p>Thank you for joining our company</p>
          <a href="#">
            <button>
              Learn more
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
