import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBuilding, faLaptopCode, faFlask } from '@fortawesome/free-solid-svg-icons';
import "./CarouselSection.css";

function CarouselSection() {
  const features = [
    {
      icon: faGraduationCap,
      title: "Smart Learning",
      description: "AI-powered answers to all your academic questions"
    },
    {
      icon: faBuilding,
      title: "Campus Info",
      description: "Instant access to facilities, events, and resources"
    },
    {
      icon: faLaptopCode,
      title: "Placement Support",
      description: "Get guidance on career opportunities and placements"
    },
    {
      icon: faFlask,
      title: "Research Hub",
      description: "Explore faculty research and academic programs"
    }
  ];

  return (
    <section className="carousel-section" id="faqs">
      <div className="carousel-container">
        <h2 className="carousel-title">Experience AI-Powered Assistance</h2>
        <p className="carousel-subtitle">Explore our intelligent features designed for your success</p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="feature-swiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-glow"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CarouselSection;
