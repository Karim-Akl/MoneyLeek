import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider-camp.css";

const SliderCamp = () => {
  const { i18n } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // مرجع للـ Swiper

  const brands = [
    {
      id: 1,
      title: "جرافيك",
      img: "/assets/images/2024-03-23-65feb16b13e9d.png",
    },
    {
      id: 2,
      title: "سوشيال ميديا",
      img: "/assets/images/logo-wb-2048x998.png",
    },
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
    {
      id: 3,
      title: "ألوان",
      img: "/assets/images/bblash-logo-copy.png",
    },
    // المزيد من العناصر
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="bg-class-sliders" style={{ position: "relative" }}>
      <h2>عملائنا الكرام</h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="brand-1">
              <Link to={`/brand-detil/${brand.id}`}>
                <img
                  src={brand.img}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/logo-wb-2048x998.png"; // Fallback to default image if error occurs
                  }}
                  alt={brand.title}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      <div className="slider-nav">
        <button ref={prevRef} className="prev-slide">
          <svg className="btn-next btn-next-black">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </button>
        <button ref={nextRef} className="next-slide">
          <svg className="btn-prev btn-prev-black">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SliderCamp;
