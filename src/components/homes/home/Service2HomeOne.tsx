"use client"
import service_data from '@/data/service_data';
import useStickySidebar from '@/hooks/useStickySidebar';
import Image from 'next/image';
import Link from 'next/link'; 

const Service2HomeOne = ({style_2}: any) => { 
    // // item slice for pages
    const style = service_data.slice(0, 6);
    const style2 = service_data;
    const data = style_2 ? style2 : style; 
     
    // // useStickySidebar('.sidebar', '.scroll-end-point');
    // // useStickySidebar('.sidebar.style-two', '.scroll-end-point.style-two');

  return (
    <>
         <div className="ak-height-125 ak-height-lg-80"></div>
          <div className="d-flex justify-content-center">
              <div className="sticky-content container" >
                  <div className="content style_2">
                      <div className="service">
                        {data.map((item, i) => (
                            <div key={i} className="service-card" data-aos="fade-left">
                            {/* <Link href="/services-single" className="card-img">
                                <Image src={item.img} className="ak-bg" alt="..." />
                            </Link> */}
                            <div className="card-info">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-desp">{item.desp}</p>
                                {/* <Link href="/services-single" className="more-btn">VIEW MORE</Link> */}
                            </div>
                        </div>
                        ))} 
                      </div>
                  </div>
                  <div className="sidebar width-none">
                      <div className="services-content">
                          <div className="ak-section-heading ak-style-1">
                              <div className="background-text" data-aos="fade-right" data-aos-duration="1000">Services</div>
                              <h2 className="ak-section-title">Dedicated<br /> Services</h2>
                              <p className="ak-section-subtitle">At G. Xpert Car Care, we are committed to providing reliable, professional, and customer-focused automotive solutions. From routine maintenance to detailed inspections, our team ensures that every service is handled with precision, care, and attention to detail, keeping your vehicle in top condition.</p>
                          </div>
                          <div className="ak-height-50 ak-height-lg-10"></div>
                          {/* <a href="#" className="more-btn">VIEW All SERVICES</a> */}
                      </div>
                  </div>
              </div>
          </div>
          <div className="scroll-end-point"></div>
    </>
  );
};

export default Service2HomeOne;