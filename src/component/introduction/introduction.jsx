import React, { useEffect, useState } from "react";
import "./introduction.css";
import { useSpring, animated } from "react-spring";


const Counter = ({ number, onAnimationEnd }) => {
  const props = useSpring({
    from: { count: 3000 },
    to: { count: number },
    config: { duration: 500 },
    onRest: onAnimationEnd,
  });

  return (
    <animated.span className="animated-number">
      {props.count.interpolate((value) => `${Math.floor(value)}+`)}
    </animated.span>
  );
};

const Introduction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectToWebsite = () => {
    window.location.href = "https://wa.link/weua1t";
  };

  const [students, setStudents] = useState(4000);
  const [mentors, setMentors] = useState(50);
  const [yearsOfExperience, setYearsOfExperience] = useState(10);

  return (
    <main>
      <section id="introduction">
        <div id="herocol">
          <div className="intro-text">
            <h1 className=" poppins-bold-italic">
              Every Pawn Has <br /> the Potential To
              <br /> Be A Queen.
            </h1>
            <p className="firstpara" style={{marginTop:'80px'}}>
              Kwinbee, the chess world’s wake up
              <br /> call rooster, Brings you the best chess tutor!
            </p>
          </div>

          <div className="bookme poppins-bold-italic">
            <h1>
              Book A FREE <br />
              DEMO NOW
            </h1>
            <p className="refer">
              AND <strong>REFER</strong> TO GET <strong>DISCOUNT</strong>
            </p>
            <div className="bookme-button" onClick={redirectToWebsite}>
              <a
                href="https://wa.link/weua1t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>BOOK A DEMO!</strong>
              </a>
            </div>
          </div>
        </div>

        <div id="overlay">
        <img src="/chesstransback.png" alt="Background" />
        </div>
      </section>
      <div className="stat" id="stats">
        <div className="stat-item">
          <Counter number={students} />
          <p>Students</p>
        </div>
        <div className="stat-item">
          <Counter number={mentors} />
          <p>Mentors</p>
        </div>
        <div className="stat-item">
          <Counter
            number={yearsOfExperience}
          />
          <p>Years of Experience</p>
        </div>
      </div>
    </main>
  );
};

export default Introduction;
