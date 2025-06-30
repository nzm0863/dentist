function About() {
  return (
    <div className="page">
      <h2>医院概要</h2>
      <p>さわやか歯科クリニックは、患者様一人ひとりに寄り添い、安心・安全な歯科治療を提供することを使命としています。</p>
      
      <div className="company-info">
        <div className="info-item">
          <h3>医院名</h3>
          <p>さわやか歯科クリニック</p>
        </div>
        <div className="info-item">
          <h3>院長</h3>
          <p>田中 太郎 先生</p>
        </div>
        <div className="info-item">
          <h3>所在地</h3>
          <p>〒123-4567<br />東京都渋谷区○○○1-2-3</p>
        </div>
        <div className="info-item">
          <h3>電話番号</h3>
          <p>03-1234-5678</p>
        </div>
        <div className="info-item">
          <h3>診療時間</h3>
          <p>平日 9:00-18:00<br />土曜 9:00-17:00<br />日祝 休診</p>
        </div>
        <div className="info-item">
          <h3>アクセス</h3>
          <p>渋谷駅から徒歩5分<br />○○線○○駅から徒歩3分</p>
        </div>
      </div>

      <div className="doctor-profile">
        <h3>院長プロフィール</h3>
        <div className="profile-content">
          <div className="profile-text">
            <p><strong>田中 太郎 先生</strong></p>
            <ul>
              <li>日本歯科大学卒業</li>
              <li>歯科医師免許取得</li>
              <li>20年以上の臨床経験</li>
              <li>日本歯科医師会会員</li>
              <li>東京都歯科医師会会員</li>
            </ul>
            <p>患者様の不安や痛みに寄り添い、一人ひとりに最適な治療プランを提案いたします。最新の技術と設備を活用し、痛みの少ない治療を心がけています。</p>
          </div>
        </div>
      </div>

      <div className="philosophy">
        <h3>診療理念</h3>
        <div className="philosophy-content">
          <div className="philosophy-item">
            <h4>🤝 患者様第一主義</h4>
            <p>患者様の健康と笑顔を最優先に考え、一人ひとりに寄り添った治療を提供します。</p>
          </div>
          <div className="philosophy-item">
            <h4>🔬 最新技術の導入</h4>
            <p>痛みの少ない治療のため、最新の設備と技術を積極的に導入しています。</p>
          </div>
          <div className="philosophy-item">
            <h4>🛡️ 安全・安心の治療</h4>
            <p>感染症対策を徹底し、安全で安心な治療環境を提供します。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 