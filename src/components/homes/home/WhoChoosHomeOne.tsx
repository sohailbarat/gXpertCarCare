
import Link from 'next/link';
import React from 'react';

const WhoChoosHomeOne = ({style_2}: any) => {
  return (
    <>
        {style_2 ? null : <div className="ak-height-125 ak-height-lg-80"></div>}
        <section className="container">
            <div className="choose-us-container-extents">
                <div className="choose-us-contain">
                    <div className="choose-us-info" data-aos="fade-up">
                        <div className="ak-section-heading ak-style-1">
                            <div className="background-text">Feature</div>
                            <h2 className="ak-section-title">Why Choose Us</h2>
                            <p className="ak-section-subtitle">We’re committed to honest service, quality workmanship, and customer satisfaction. With certified technicians, transparent pricing, and a full range of automotive services, we treat your vehicle like it’s our own every time.</p>
                        </div>
                        <div className="ak-height-60 ak-height-lg-30"></div>
                        <div className="stroke-heading-text">
                            <h3 className="ak-stroke-text hover-color-changes">Certified Technicians</h3>
                            <h3 className="ak-stroke-text hover-color-changes">Comprehensive Repair Services</h3>
                            <h3 className="ak-stroke-text hover-color-changes">900 Five Star Reviews</h3>
                            <h3 className="ak-stroke-text hover-color-changes">Warranty on Repairs</h3>
                        </div>
                        <div className="ak-height-60 ak-height-lg-30"></div>
                        <Link href="/about" className="common-btn">
                            View More
                        </Link>
                    </div>
                    <div className="choose-us-img" data-aos="fade-up" data-aos-delay="150">
                        <img src="assets/img/choose-us.png" alt="..." />
                        <img className="circle-img" src="assets/img/Circle.png" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default WhoChoosHomeOne;