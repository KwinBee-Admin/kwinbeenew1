import React, { useEffect, useState } from "react";
import "./introduction.css";
import { useSpring, animated } from "react-spring";
import Scene from "./chesspices"; // Ensure the path is correct
import backimage from "./chesstransback.png";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToWebsite = () => {
    window.location.href = "https://wa.link/weua1t";
  };

  const [students, setStudents] = useState(4000);
  const [mentors, setMentors] = useState(50);
  const [yearsOfExperience, setYearsOfExperience] = useState(10);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };

  return (
    <main>
      <section id="introduction">
        <div id="herocol">
          <div className="intro-text">
            <h1 className=" poppins-bold-italic">
              Every Pawn Has <br /> the Potential To
              <br /> Be A Queen.
            </h1>
            <p>
              Kwinbee, the chess world’s wake up
              <br /> call rooster, Brings you the best chess tutor!
            </p>
          </div>

          {!animationComplete ? (
            <div className="empbox">
              <div className="loader"></div>
            </div>
          ) : (
            <Scene mousePosition={mousePosition} />
          )}

          <div className="bookme poppins-bold-italic">
            <h1>
              Book A FREE <br />
              DEMO NOW
            </h1>
            <br />
            <p className="refer">
              AND <strong>REFER</strong> TO GET <strong>DISCOUNT</strong>
            </p>
            <br />
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
          <img src={backimage} alt="Background" />
        </div>
      </section>
      <div className="stat" id="stats">
        <div className="stat-item">
          <Counter number={students} onAnimationEnd={handleAnimationEnd} />
          <p>Students</p>
        </div>
        <div className="stat-item">
          <Counter number={mentors} onAnimationEnd={handleAnimationEnd} />
          <p>Mentors</p>
        </div>
        <div className="stat-item">
          <Counter
            number={yearsOfExperience}
            onAnimationEnd={handleAnimationEnd}
          />
          <p>Years of Experience</p>
        </div>
      </div>
    </main>
  );
};

export default Introduction;
