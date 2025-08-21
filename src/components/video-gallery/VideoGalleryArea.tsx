"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

const VideoGalleryArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false); 
  
  return (
    <>

    
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
      <div className="ak-height-75 ak-height-lg-80"></div>
    <section className="container">
        <div className="row g-4 row-cols-md-2 row-cols-1">
            <div className="col">
                <div className="video-gallery">
                    <div className="gallery-img-content" data-swiper-slide-index="0" role="group" aria-label="1 / 7">
                        <a onClick={() => setIsVideoOpen(true)}
                        style={{cursor: "pointer"}}
                            className="ak-video-block ak-video-open  gallery-img-overlay">
                            <span className="overlay-fr">
                                <span className="overlay-se">
                                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8242 11.3258L0.177489 22.3868L0.17749 0.2648L16.8242 11.3258Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                        <img src="assets/img/video_gallery_1.jpg" className="gallery-img" alt="..." />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="video-gallery">
                    <div className="gallery-img-content" data-swiper-slide-index="0" role="group" aria-label="1 / 7">
                        <a onClick={() => setIsVideoOpen(true)}
                        style={{cursor: "pointer"}}
                            className="ak-video-block ak-video-open  gallery-img-overlay">
                            <span className="overlay-fr">
                                <span className="overlay-se">
                                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8242 11.3258L0.177489 22.3868L0.17749 0.2648L16.8242 11.3258Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                        <img src="assets/img/video_gallery_2.jpg" className="gallery-img" alt="..." />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="video-gallery">
                    <div className="gallery-img-content" data-swiper-slide-index="0" role="group" aria-label="1 / 7">
                        <a onClick={() => setIsVideoOpen(true)}
                        style={{cursor: "pointer"}}
                            className="ak-video-block ak-video-open  gallery-img-overlay">
                            <span className="overlay-fr">
                                <span className="overlay-se">
                                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8242 11.3258L0.177489 22.3868L0.17749 0.2648L16.8242 11.3258Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                        <img src="assets/img/video_gallery_3.jpg" className="gallery-img" alt="..." />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="video-gallery">
                    <div className="gallery-img-content" data-swiper-slide-index="0" role="group" aria-label="1 / 7">
                        <a onClick={() => setIsVideoOpen(true)}
                        style={{cursor: "pointer"}}
                            className="ak-video-block ak-video-open  gallery-img-overlay">
                            <span className="overlay-fr">
                                <span className="overlay-se">
                                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8242 11.3258L0.177489 22.3868L0.17749 0.2648L16.8242 11.3258Z"
                                            fill="white" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                        <img src="assets/img/video_gallery_4.jpg" className="gallery-img" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default VideoGalleryArea;