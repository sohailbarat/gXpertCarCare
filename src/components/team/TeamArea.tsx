
import Link from 'next/link';
import React from 'react';

const TeamArea = ({style_2, style_3}: any) => {
  return (
    <>
    {style_2 && 
    <div className={`ak-height-125 ak-height-lg-80`}></div>
    }
    {style_3 && 
    <div className={`ak-height-25`}></div>
    }
       <div className="container">
        {style_3 && 
          <div className="center-section-heading" data-aos="fade-up">
          <div className="ak-section-heading ak-style-1">
              <div className="background-text" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                  OurTeam
              </div>
              <div className="text-md-center">
                  <h2 className="ak-section-title">Our Team</h2>
                  <p className="ak-section-subtitle">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      <br />industry. Lorem Ipsum has been the industry's stan.
                  </p>
              </div>
          </div>
      </div>
        }
        {style_3 && <div className="ak-height-50 ak-height-lg-50"></div>}
        <div className="all-members">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                <div className="col">
                    <div className="member-card" data-aos="fade-up" data-aos-delay="0">
                        <Link href="/team-single">
                            <img src="assets/img/member_1.jpg" className="member-img ak-bg" alt="..." />
                        </Link>
                        <div className="member-info">
                            <div className="member-title">
                                <Link href="/team-single" className="title">
                                    Darrell T. Beedle</Link>
                                <p className="desp">Lead Mechanic</p>
                            </div>
                            <div className="member-info-social">
                                <a href="https://www.facebook.com/" className="icon"><img src="assets/img/linkedinicon.svg"
                                        alt="..." /></a>
                                <a href="https://bd.linkedin.com/" className="icon"><img src="assets/img/facebookicon.svg"
                                        alt="" /></a>
                                <a href="https://www.instagram.com/" className="icon"><img src="assets/img/twittericon.svg"
                                        alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="member-card" data-aos="fade-up" data-aos-delay="50">
                        <Link href="/team-single">
                            <img src="assets/img/member_2.jpg" className="member-img ak-bg" alt="..." />
                        </Link>
                        <div className="member-info">
                            <div className="member-title">
                                <Link href="/team-single" className="title">
                                    Michael Jack</Link>
                                <p className="desp">Service Advisor</p>
                            </div>
                            <div className="member-info-social">
                                <a href="https://www.facebook.com/" className="icon"><img src="assets/img/linkedinicon.svg"
                                        alt="..." /></a>
                                <a href="https://bd.linkedin.com/" className="icon"><img src="assets/img/facebookicon.svg"
                                        alt="" /></a>
                                <a href="https://www.instagram.com/" className="icon"><img src="assets/img/twittericon.svg"
                                        alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="member-card" data-aos="fade-up" data-aos-delay="100">
                        <Link href="/team-single">
                            <img src="assets/img/member_3.jpg" className="member-img ak-bg" alt="..." />
                        </Link>
                        <div className="member-info">
                            <div className="member-title">
                                <Link href="/team-single" className="title">Cathy Sparkman</Link>
                                <p className="desp">Diagnostic Technician</p>
                            </div>
                            <div className="member-info-social">
                                <a href="https://www.facebook.com/" className="icon"><img src="assets/img/linkedinicon.svg"
                                        alt="..." /></a>
                                <a href="https://bd.linkedin.com/" className="icon"><img src="assets/img/facebookicon.svg"
                                        alt="" /></a>
                                <a href="https://www.instagram.com/" className="icon"><img src="assets/img/twittericon.svg"
                                        alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {style_2 ? null :
                <>
                <div className="col">
                    <div className="member-card" data-aos="fade-up" data-aos-delay="0">
                        <Link href="/team-single">
                            <img src="assets/img/member_4.jpg" className="member-img ak-bg" alt="..." />
                        </Link>
                        <div className="member-info">
                            <div className="member-title">
                                <Link href="/team-single" className="title">Charles G. Macdonald</Link>
                                <p className="desp">System Technician</p>
                            </div>
                            <div className="member-info-social">
                                <a href="https://www.facebook.com/" className="icon"><img src="assets/img/linkedinicon.svg"
                                        alt="..." /></a>
                                <a href="https://bd.linkedin.com/" className="icon"><img src="assets/img/facebookicon.svg"
                                        alt="" /></a>
                                <a href="https://www.instagram.com/" className="icon"><img src="assets/img/twittericon.svg"
                                        alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="member-card" data-aos="fade-up" data-aos-delay="50">
                        <Link href="/team-single">
                            <img src="assets/img/member_5.jpg" className="member-img ak-bg" alt="..." />
                        </Link>
                        <div className="member-info">
                            <div className="member-title">
                                <Link href="/team-single" className="title">Anthony M. Lass</Link>
                                <p className="desp">Systems Specialist</p>
                            </div>
                            <div className="member-info-social">
                                <a href="https://www.facebook.com/" className="icon"><img src="assets/img/linkedinicon.svg"
                                        alt="..." /></a>
                                <a href="https://bd.linkedin.com/" className="icon"><img src="assets/img/facebookicon.svg"
                                        alt="" /></a>
                                <a href="https://www.instagram.com/" className="icon"><img src="assets/img/twittericon.svg"
                                        alt="" /></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="member-card" data-aos="fade-up" data-aos-delay="100">
                        <Link href="/team-single">
                            <img src="assets/img/member_6.jpg" className="member-img ak-bg" alt="..." />
                        </Link>
                        <div className="member-info">
                            <div className="member-title">
                                <Link href="/team-single" className="title">Tyra Crawford</Link>
                                <p className="desp">Lead Mechanic</p>
                            </div>
                            <div className="member-info-social">
                                <a href="https://www.facebook.com/" className="icon"><img src="assets/img/linkedinicon.svg"
                                        alt="..." /></a>
                                <a href="https://bd.linkedin.com/" className="icon"><img src="assets/img/facebookicon.svg"
                                        alt="" /></a>
                                <a href="https://www.instagram.com/" className="icon"><img src="assets/img/twittericon.svg"
                                        alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>                
                </>
                
                }
            </div>
        </div>
    </div>
    </>
  );
};

export default TeamArea;