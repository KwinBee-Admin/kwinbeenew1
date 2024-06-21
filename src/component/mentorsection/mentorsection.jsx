import React from "react";
import "./mentorsection.css"; // Create and import a CSS file for styling the component
import ceoImage from "./amann.png"; // Update the path accordingly
import whyImage1 from "./whypic/why1.png"; // Update the path accordingly
import whyImage2 from "./whypic/why2.png"; // Update the path accordingly
import whyImage3 from "./whypic/why3.png"; // Update the path accordingly
import whyImage4 from "./whypic/why4.png"; // Update the path accordingly

const MentorSection = () => {
  return (
    <>
      <section id="ceo">
        <div className="line-flex">
          <div className="line"></div>
          <h2 className="">Know Your Mentor</h2>
          <div className="line"></div>
        </div>
        <div className="ceo-card">
          <div className="ceo-image">
            <img src={ceoImage} alt="CEO" />
          </div>
          <div className="ceo-info">
            <a
              href="https://www.linkedin.com/in/aman-yadav-a67266180"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Aman Yadav</h3>
            </a>
            <p>
              At the youthful age of 21, Aman stands as an accomplished
              International chess player and a dedicated professional coach.
              Chess has been an inseparable part of his life, offering not only
              joy but also instilling essential life skills. Aman's passion for
              chess goes beyond the board; it's a commitment to sharing his
              knowledge and experiences with aspiring players.
            </p>
            <p>
              Aman's journey with chess commenced at the tender age of 7. Since
              then, he has accumulated a wealth of experience both as a player
              and a teacher. Throughout his chess odyssey, he has clinched
              numerous triumphs in national and international tournaments,
              etching cherished memories with each victory.
            </p>
            <p>
              One of Aman's particular joys in chess lies in the art of the
              attack. He relishes every opportunity to teach the nuances of
              aggressive play to his students, imparting not only tactical
              prowess but also a deep appreciation for the beauty of chess
              strategy.
            </p>
            <p>
              With about a decade of coaching experience, Aman brings a wealth
              of wisdom and expertise to the table. He is deeply committed to
              working with individuals who share a genuine love for the game of
              chess. Aman's coaching philosophy goes beyond the moves on the
              board; it's about fostering a deep understanding and a lasting
              passion for this timeless game.
            </p>
          </div>
        </div>
      </section>
      <section id="whywe">
        <div className="line-flex">
          <div className="line"></div>
          <h2 className="">Why KwinBee?</h2>
          <div className="line"></div>
        </div>
        <div className="whycontainer">
          <div className="whycard">
            <div className="whyimage">
              <img src={whyImage1} alt="Curated by Grandmasters" />
            </div>
            <h3 className="whyres">Curated by Grandmasters</h3>
          </div>
          <div className="whycard">
            <div className="whyimage">
              <img src={whyImage2} alt="One-on-One Mentoring" />
            </div>
            <h3 className="whyres">One-on-One Mentoring</h3>
          </div>
          <div className="whycard">
            <div className="whyimage">
              <img src={whyImage3} alt="Fun & Interactive Learning" />
            </div>
            <h3 className="whyres">Fun & Interactive Learning</h3>
          </div>
          <div className="whycard">
            <div className="whyimage">
              <img src={whyImage4} alt="Fortnightly Tournaments" />
            </div>
            <h3 className="whyres">Fortnightly Tournaments</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorSection;
