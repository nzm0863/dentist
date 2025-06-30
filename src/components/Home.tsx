import { Link } from "react-router-dom";
import Hero from "./hero";
import "./hero.css";

function Home() {
  return (
    <div>
      <Hero />

      <div className="page">
        <h2>さわやか歯科クリニックへようこそ</h2>
        <p>
          患者様一人ひとりに寄り添い、安心・安全な歯科治療を提供いたします。
        </p>

        <div className="features">
          <div className="feature">
            <h3>🏥 最新設備</h3>
            <p>痛みの少ない治療のための最新設備を完備しています。</p>
          </div>
          <div className="feature">
            <h3>👨‍⚕️ 経験豊富な医師</h3>
            <p>20年以上の経験を持つ歯科医師が治療いたします。</p>
          </div>
          <div className="feature">
            <h3>🕒 予約制</h3>
            <p>待ち時間を最小限に抑えた予約制で、お忙しい方にも安心です。</p>
          </div>
        </div>

        <div className="services">
          <h3>診療科目</h3>
          <div className="service-grid">
            <div className="service-item">
              <h4>🦷 一般歯科</h4>
              <p>虫歯治療、歯周病治療、定期検診</p>
            </div>
            <div className="service-item">
              <h4>🦷 小児歯科</h4>
              <p>お子様の虫歯予防、フッ素塗布</p>
            </div>
            <div className="service-item">
              <h4>🦷 予防歯科</h4>
              <p>歯石除去、PMTC、ブラッシング指導</p>
            </div>
            <div className="service-item">
              <h4>🦷 審美歯科</h4>
              <p>ホワイトニング、セラミック治療</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>初診の方へ</h3>
          <p>初めてご来院される方は、事前にご予約をお願いいたします。</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">📞 電話予約</Link>
            <Link to="/contact" className="cta-button secondary">
              📝 お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
