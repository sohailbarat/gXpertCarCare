import React from 'react';
import Image from 'next/image';

const HeroHomeOne = () => {
  return (
    <>
      <div className="ak-slider ak-slider-hero-1 css-hero-slider">
        {/* Slide 1 - with text overlay */}
        <div className="css-hero-slide css-hero-slide-1">
          <div className="ak-hero ak-style1 slide-inner">
            <Image
              src="/assets/img/hero_slider_bg_1.jpg"
              alt="G. Xpert Car Care auto repair shop in Calgary, AB"
              fill
              priority
              sizes="100vw"
              quality={75}
              className="ak-hero-bg ak-bg object-cover"
              style={{ objectFit: 'cover' }}
            />
            <div className="container">
              <div className="hero-slider-info">
                <div className="slider-info">
                  <div className="hero-title">
                    <h1 className="hero-main-title">Car Repair &amp; Auto</h1>
                    <h1 className="hero-main-title-1 style-2">Services</h1>
                    <p className="mini-title">
                      Our skilled team of certified technicians is here to provide
                      top-notch car repair and auto services to ensure your vehicle performs at its best.
                    </p>
                  </div>
                  <div className="ak-height-45 ak-height-lg-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - image only */}
        <div className="css-hero-slide css-hero-slide-2">
          <div className="ak-hero ak-style1 slide-inner">
            <Image
              src="/assets/img/hero_slider_bg_5.png"
              alt="Professional car repair and auto services at G. Xpert Car Care"
              fill
              loading="lazy"
              sizes="100vw"
              quality={75}
              className="ak-hero-bg ak-bg object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Contact info overlay */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-contact-info">
            <a href="mailto:g.xpertcare@gmail.com" aria-label="Email G. Xpert Car Care">
              <div className="d-flex align-items-center gap-2">
                <div className="heartbeat-icon">
                  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <circle opacity="0.3" cx="30.5" cy="30" r="25" fill="#FF3D24" />
                      <circle opacity="0.3" cx="30.5" cy="30" r="30" fill="#FF3D24" />
                      <circle cx="30.5" cy="30" r="20" fill="#FF3D24" />
                    </g>
                    <g clipPath="url(#clip0_52_92)">
                      <path d="M39.2141 38.8572C39.6637 38.8572 40.0533 38.7087 40.3844 38.4156L34.7181 32.7491C34.5821 32.8464 34.4504 32.9411 34.3259 33.0311C33.9019 33.3435 33.5577 33.5873 33.2934 33.762C33.0292 33.9371 32.6776 34.1156 32.2388 34.2978C31.7996 34.4802 31.3905 34.5711 31.011 34.5711H30.9999H30.9888C30.6092 34.5711 30.2001 34.4803 29.761 34.2978C29.3219 34.1156 28.9703 33.9371 28.7063 33.762C28.4421 33.5873 28.0981 33.3436 27.6738 33.0311C27.5556 32.9444 27.4245 32.8493 27.2827 32.7476L21.6153 38.4156C21.9465 38.7087 22.3363 38.8572 22.7858 38.8572H39.2141Z" fill="white" />
                      <path d="M22.1274 29.1809C21.7033 28.8982 21.3273 28.5744 21 28.2097V36.8309L25.9943 31.8367C24.9951 31.1391 23.7078 30.2549 22.1274 29.1809Z" fill="white" />
                      <path d="M39.8839 29.1809C38.3638 30.2098 37.0718 31.0955 36.0077 31.8386L41 36.8311V28.2097C40.6799 28.5671 40.308 28.8906 39.8839 29.1809Z" fill="white" />
                      <path d="M39.2141 23.1428H22.7858C22.2127 23.1428 21.772 23.3364 21.4634 23.723C21.1544 24.1099 21.0002 24.5937 21.0002 25.1739C21.0002 25.6426 21.2049 26.1504 21.614 26.6975C22.0231 27.2444 22.4584 27.6739 22.9198 27.9864C23.1727 28.1651 23.9354 28.6953 25.2078 29.5769C25.8947 30.0529 26.4921 30.4678 27.0054 30.8258C27.4429 31.1307 27.8203 31.3947 28.1318 31.6138C28.1676 31.6389 28.2238 31.6791 28.2985 31.7325C28.3789 31.7902 28.4807 31.8636 28.6063 31.9542C28.8481 32.1291 29.0489 32.2705 29.2089 32.3785C29.3687 32.4865 29.5623 32.6071 29.7894 32.7411C30.0163 32.8749 30.2303 32.9756 30.4312 33.0425C30.6321 33.1094 30.8181 33.1429 30.9892 33.1429H31.0003H31.0114C31.1824 33.1429 31.3685 33.1094 31.5694 33.0425C31.7702 32.9756 31.9841 32.8752 32.2112 32.7411C32.438 32.6071 32.6314 32.4862 32.7916 32.3785C32.9516 32.2705 33.1525 32.1291 33.3943 31.9542C33.5196 31.8636 33.6214 31.7902 33.7019 31.7327C33.7765 31.6791 33.8328 31.6391 33.8687 31.6138C34.1114 31.4449 34.4897 31.182 34.9982 30.8289C35.9234 30.186 37.2861 29.2398 39.092 27.9864C39.6351 27.6071 40.0888 27.1493 40.4535 26.6137C40.8175 26.0782 41 25.5164 41 24.9286C41 24.4375 40.8231 24.0173 40.4699 23.6673C40.1164 23.3177 39.6978 23.1428 39.2141 23.1428Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_92">
                        <rect width="20" height="20" fill="white" transform="translate(20.5 21)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="ak-font-18 ak-white-color ak-semi-bold">g.xpertcare@gmail.com</p>
              </div>
            </a>
            <a href="https://www.google.com/maps?daddr=2423+27+Ave+NE,+Calgary,+AB+T2E+8L2" aria-label="Get directions to G. Xpert Car Care">
              <div className="d-flex align-items-center gap-2">
                <div className="heartbeat-icon">
                  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <circle opacity="0.3" cx="30.5" cy="30" r="25" fill="#FF3D24" />
                      <circle opacity="0.3" cx="30.5" cy="30" r="30" fill="#FF3D24" />
                      <circle cx="30.5" cy="30" r="20" fill="#FF3D24" />
                    </g>
                    <path d="M30.5 21C26.9857 21 24.0547 23.8309 24.0547 27.4453C24.0547 28.8204 24.4679 30.0466 25.2609 31.1955L30.0068 38.601C30.237 38.961 30.7635 38.9603 30.9932 38.601L35.7597 31.1704C36.5356 30.0734 36.9453 28.7854 36.9453 27.4453C36.9453 23.8914 34.0539 21 30.5 21ZM30.5 30.375C28.8846 30.375 27.5703 29.0607 27.5703 27.4453C27.5703 25.83 28.8846 24.5156 30.5 24.5156C32.1154 24.5156 33.4297 25.83 33.4297 27.4453C33.4297 29.0607 32.1154 30.375 30.5 30.375Z" fill="white" />
                    <path d="M35.0806 34.4646L32.1302 39.0774C31.3665 40.2681 29.6293 40.2642 28.8692 39.0786L25.914 34.4659C23.3138 35.067 21.7109 36.1683 21.7109 37.4844C21.7109 39.768 26.2394 41 30.5 41C34.7606 41 39.2891 39.768 39.2891 37.4844C39.2891 36.1674 37.6839 35.0655 35.0806 34.4646Z" fill="white" />
                  </svg>
                </div>
                <p className="ak-font-18 ak-white-color ak-semi-bold">2423 27 Ave NE, Calgary, AB T2E 8L2</p>
              </div>
            </a>
            <div className="d-flex align-items-center gap-2">
              <div className="heartbeat-icon">
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <circle opacity="0.3" cx="30.5" cy="30" r="25" fill="#FF3D24" />
                    <circle opacity="0.3" cx="30.5" cy="30" r="30" fill="#FF3D24" />
                    <circle cx="30.5" cy="30" r="20" fill="#FF3D24" />
                  </g>
                  <g clipPath="url(#clip0_52_110_hero)">
                    <path d="M25 22.6667C25.0884 22.6667 25.1732 22.6316 25.2357 22.569C25.2982 22.5065 25.3334 22.4217 25.3334 22.3333V21C25.3334 20.9116 25.2982 20.8268 25.2357 20.7643C25.1732 20.7018 25.0884 20.6667 25 20.6667C24.9116 20.6667 24.8268 20.7018 24.7643 20.7643C24.7018 20.8268 24.6667 20.9116 24.6667 21V22.3333C24.6667 22.4217 24.7018 22.5065 24.7643 22.569C24.8268 22.6316 24.9116 22.6667 25 22.6667Z" fill="white" />
                    <path d="M38.6667 22H38V22.3333C38 22.5985 37.8947 22.8529 37.7071 23.0404C37.5196 23.228 37.2652 23.3333 37 23.3333C36.7348 23.3333 36.4805 23.228 36.2929 23.0404C36.1054 22.8529 36 22.5985 36 22.3333V22H34V22.3333C34 22.5985 33.8947 22.8529 33.7071 23.0404C33.5196 23.228 33.2652 23.3333 33 23.3333C32.7348 23.3333 32.4805 23.228 32.2929 23.0404C32.1054 22.8529 32 22.5985 32 22.3333V22H30V22.3333C30 22.5985 29.8947 22.8529 29.7071 23.0404C29.5196 23.228 29.2652 23.3333 29 23.3333C28.7348 23.3333 28.4805 23.228 28.2929 23.0404C28.1054 22.8529 28 22.5985 28 22.3333V22H26V22.3333C26 22.5985 25.8947 22.8529 25.7071 23.0404C25.5196 23.228 25.2652 23.3333 25 23.3333C24.7348 23.3333 24.4804 23.228 24.2929 23.0404C24.1054 22.8529 24 22.5985 24 22.3333V22H23.3334C22.8915 22.0005 22.4679 22.1763 22.1554 22.4887C21.843 22.8012 21.6672 23.2248 21.6667 23.6667V24H40.3334V23.6667C40.3328 23.2248 40.1571 22.8012 39.8446 22.4887C39.5322 22.1763 39.1086 22.0005 38.6667 22Z" fill="white" />
                    <path d="M21.6667 37.6667C21.6672 38.1085 21.843 38.5322 22.1554 38.8446C22.4679 39.157 22.8915 39.3328 23.3334 39.3333H38.6667C39.1086 39.3328 39.5322 39.157 39.8446 38.8446C40.1571 38.5322 40.3328 38.1085 40.3334 37.6667V24.6667H21.6667V37.6667Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_52_110_hero">
                      <rect width="20" height="20" fill="white" transform="translate(20.5 20)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="ak-font-18 ak-white-color ak-semi-bold">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="social-hero">
          <a href="https://www.yelp.ca/biz/g-xpert-car-care-calgary?osq=g.xpert+car+care" className="social-icon1" aria-label="Visit us on Yelp" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M12.02 2.5c-.86 0-1.52.74-1.46 1.6l.34 4.8c.06.8.82 1.32 1.6 1.1l2.1-.62c.78-.23 1.08-1.18.56-1.82l-3.08-3.86a1.5 1.5 0 0 0-1.06-.2z" fill="white" />
              <path d="M8.4 10.2l-4.68 1.48a1.2 1.2 0 0 0-.6 1.9l1.7 2.24a1.2 1.2 0 0 0 1.86.04l3.1-3.72a1.2 1.2 0 0 0-1.38-1.94z" fill="white" />
              <path d="M9.1 14.4l-2.9 3.95a1.2 1.2 0 0 0 .54 1.82l2.5.96a1.2 1.2 0 0 0 1.62-1.14l-.1-4.92a1.2 1.2 0 0 0-1.66-.67z" fill="white" />
              <path d="M13.5 14.6l.28 4.86a1.2 1.2 0 0 0 1.66 1.06l2.46-1.04a1.2 1.2 0 0 0 .46-1.86l-3.1-3.82a1.2 1.2 0 0 0-1.76.8z" fill="white" />
              <path d="M15.6 10.4l4.66 1.56a1.2 1.2 0 0 1 .56 1.92l-1.74 2.18a1.2 1.2 0 0 1-1.86-.1l-3.02-3.78a1.2 1.2 0 0 1 1.4-1.78z" fill="white" />
            </svg>
          </a>
          <a href="https://www.instagram.com/g.xpertcarcare/" className="social-icon1" aria-label="Follow us on Instagram" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.facebook.com/p/G-Xpert-Car-Care-61565121207296/" className="social-icon1" aria-label="Visit us on Facebook" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <g clipPath="url(#clip0_64_133_hero)">
                <path d="M16.5 7.08128L9.20218 7.08128L9.20218 4.63269L6.35725 4.26533L6.35725 7.08128L4.54118 7.08128C3.71776 7.08128 3.15661 6.85356 3.15661 5.67145L3.15599 4.16622L0.611384 4.16622C0.577556 4.42653 0.5 5.32007 0.5 6.36007C0.5 8.53175 1.82557 10.0185 4.25942 10.0185L6.35725 10.0185L6.35725 12.4745L9.20218 12.4745L9.20218 10.0185L16.5 10.0185L16.5 7.08128Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_64_133_hero">
                  <rect width="16" height="16" fill="white" transform="translate(0.5 16.3204) rotate(-90)" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <div className="social-horizontal"></div>
          <h6 className="social-link">FOLLOW US</h6>
        </div>
      </div>

    </>
  );
};

export default HeroHomeOne;
