import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// SwiperのCSSをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="hero-slide hero-slide-1">
            <div className="hero-content">
              <h2>さわやか歯科クリニック</h2>
              <p>あなたの笑顔を守る、信頼できる歯科医院</p>
              <a href="#reservation-calendar-container">
                <button className="hero-btn">予約する</button>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide hero-slide-2">
            <div className="hero-content">
              <h2>最新の設備</h2>
              <p>痛みの少ない治療で、安心して通院できます</p>
              <Link to="/about" className="hero-content-link">設備を見る</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide hero-slide-3">
            <div className="hero-content">
              <h2>経験豊富な医師</h2>
              <p>20年以上の経験を持つ歯科医師が治療いたします</p>
              <Link to="/about" className="hero-content-link">医師紹介</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
