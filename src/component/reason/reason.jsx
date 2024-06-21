import React from 'react';
import './reason.css';
import LOGO1 from './res/logo1.png';
import LOGO2 from './res/logo2.png';
import LOGO3 from './res/logo3.png';
import LOGO4 from './res/logo4.png';
import LOGO5 from './res/logo5.png';
import LOGO6 from './res/logo6.png';
import LOGO7 from './res/logo7.png';
import LOGO8 from './res/logo8.png';
import LOGO9 from './res/logo9.png';
import LOGO10 from './res/logo10.png';

const ReasonsComponent = () => {
  return (
    <section id="reasons-section">
      <div class="line-flex"><div class="line"></div><h2 class="">WHY CHESS</h2><div class="line"></div></div>
      <div className="reason">
        <div className="reason-card">
          <img src={LOGO1} alt="logo for improve concentration" />
          <h3>Improves Concentration</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO2} alt="logo for Enhances Strategic Thinking" />
          <h3>Enhances Strategic Thinking</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO3} alt="Logo 3" />
          <h3>Boosts Memory</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO4} alt="Time Management" />
          <h3>Time Management</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO5} alt="Mathematical and Logical Thinking" />
          <h3>Mathematical and Logical Thinking</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO6} alt="Logo 3" />
          <h3>Creative Expression</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO7} alt="Stress Reduction" />
          <h3>Stress Reduction</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO8} alt="Creative Expression" />
          <h3>Long-Term Planning</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO9} alt="Social Interaction" />
          <h3>Social Interaction</h3>
        </div>
        <div className="reason-card">
          <img src={LOGO10} alt="Social Interaction" />
          <h3>Builds Confidence</h3>
        </div>
      </div>
    </section>
  );
};

export default ReasonsComponent;
