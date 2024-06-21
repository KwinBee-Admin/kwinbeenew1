import React from 'react';
import './course.css';
import BASIC from './basic.png';
import INTERMEIDATE from './intermeidate.png';
import ADVANCED from './advanced.png';
import EMAIL from './email-256.png';
import WHATSAPP from './whatsapp-400.png';

const CourseSection = () => {
    return (
        <section id="packages123">
            <div class="line-flex"><div class="line"></div><h2 class="">Course Quests</h2><div class="line"></div></div>
            <div className="package-container123">
                {/* Pawn Package */}
                <div className="package-card123">
                    <div className='courseimg'><img src={BASIC} alt="Basic Package" /></div>
                    <div className="package-info123">
                        <h3>Pawn</h3>
                        <ul className="bullet-points123">
                            <li>36 hrs of training</li>
                            <li>8 test & review sessions</li>
                            <li>4 practice and analysis sessions</li>
                            <li>Tournament</li>
                            <li>Access to all content</li>
                            <li>Batch Size: 1 on 1</li>
                            <li>Regular Feedback</li>
                            <li>Monthly PTM</li>
                            <li>24x7 Support.</li>
                            <li>For group classes please contact us on <a className="linkh" href="https://wa.link/weua1t" target="_blank">WhatsApp</a></li>
                        </ul>
                    </div>
                    <div className="packcon">
                        <a className="packmail" href="mailto:chess@kwinbee.com?subject=Pawn%20Course%20Query" target="_blank">
                            <div className="mailbutt">
                                <img src={EMAIL} alt="Email" />
                                <h6>Mail</h6>
                            </div>
                        </a>
                        <a className="packwh" href="https://wa.link/weua1t" target="_blank">
                            <div className="whatbutt">
                                <img src={WHATSAPP} alt="WhatsApp" />
                                <h6>WhatsApp</h6>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bishop Package */}
                <div className="package-card123">
                <div className='courseimg'><img src={INTERMEIDATE} alt="Intermediate Package" /></div>
                    <div className="package-info123">
                        <h3>Bishop</h3>
                        <ul className="bullet-points123">
                            <li>48 hrs of training</li>
                            <li>12 test & review sessions</li>
                            <li>4 practice and analysis sessions</li>
                            <li>Tournament</li>
                            <li>Access to all content</li>
                            <li>Batch Size: 1 on 1</li>
                            <li>Regular Feedback</li>
                            <li>Monthly PTM</li>
                            <li>24x7 Support.</li>
                            <li>For group classes please contact us on <a className="linkh" href="https://wa.link/weua1t" target="_blank">WhatsApp</a></li>
                        </ul>
                    </div>
                    <div className="packcon">
                        <a className="packmail" href="mailto:chess@kwinbee.com?subject=Bishop%20Course%20Query" target="_blank">
                            <div className="mailbutt">
                                <img src={EMAIL} alt="Email" />
                                <h6>Mail</h6>
                            </div>
                        </a>
                        <a className="packwh" href="https://wa.link/weua1t" target="_blank">
                            <div className="whatbutt">
                                <img src={WHATSAPP} alt="WhatsApp" />
                                <h6>WhatsApp</h6>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Queen Package */}
                <div className="package-card123">
                <div className='courseimg'><img src={ADVANCED} alt="Advanced Package" /></div>
                    <div className="package-info123">
                        <h3>Queen</h3>
                        <ul className="bullet-points123">
                            <li>76 hrs of training</li>
                            <li>16 test & review sessions</li>
                            <li>4 practice and analysis sessions</li>
                            <li>Tournament</li>
                            <li>Access to all content</li>
                            <li>Batch Size: 1 on 1</li>
                            <li>Regular Feedback</li>
                            <li>Monthly PTM</li>
                            <li>24x7 Support.</li>
                            <li>For group classes please contact us on <a className="linkh" href="https://wa.link/weua1t" target="_blank">WhatsApp</a></li>
                        </ul>
                    </div>
                    <div className="packcon">
                        <a className="packmail" href="mailto:chess@kwinbee.com?subject=Queen%20Course%20Query" target="_blank">
                            <div className="mailbutt">
                                <img src={EMAIL} alt="Email" />
                                <h6>Mail</h6>
                            </div>
                        </a>
                        <a className="packwh" href="https://wa.link/weua1t" target="_blank">
                            <div className="whatbutt">
                                <img src={WHATSAPP} alt="WhatsApp" />
                                <h6>WhatsApp</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
