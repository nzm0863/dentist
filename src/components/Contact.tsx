import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // ここで実際の送信処理(API連携など)を追加できます
  };

  return (
    <div className="page">
      <h2>お問い合わせ・ご予約</h2>
      <p>ご質問やご予約は、お電話または下記フォームからお気軽にお問い合わせください。</p>
      
      <div className="contact-info-section">
        <h3>📞 お電話でのお問い合わせ</h3>
        <div className="phone-info">
          <p className="phone-number">03-1234-5678</p>
          <p>診療時間: 平日 9:00-18:00 / 土曜 9:00-17:00</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>📝 フォームでのお問い合わせ</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">お名前 <span className="required">*</span></label>
            <input type="text" id="name" placeholder="山田 太郎" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">メールアドレス <span className="required">*</span></label>
            <input type="email" id="email" placeholder="example@email.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">電話番号</label>
            <input type="tel" id="phone" placeholder="03-1234-5678" />
          </div>
          
          <div className="form-group">
            <label htmlFor="inquiry-type">お問い合わせ種別 <span className="required">*</span></label>
            <select id="inquiry-type" required>
              <option value="">選択してください</option>
              <option value="appointment">ご予約</option>
              <option value="treatment">治療について</option>
              <option value="price">料金について</option>
              <option value="access">アクセス・地図</option>
              <option value="other">その他</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">お問い合わせ内容 <span className="required">*</span></label>
            <textarea 
              id="message" 
              rows={5} 
              placeholder="ご質問やご要望を詳しくお聞かせください。"
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>プライバシーポリシーに同意します <span className="required">*</span></span>
            </label>
          </div>
          
          <button type="submit" className="submit-btn">送信する</button>
        </form>
        {submitted && (
          <div className="submit-message" style={{ color: '#1a8c7a', marginTop: 16, textAlign: 'center' }}>
            送信しました。お問い合わせありがとうございます。
          </div>
        )}
      </div>

      <div className="access-info">
        <h3>📍 アクセス情報</h3>
        <div className="access-details">
          <p><strong>住所:</strong> 〒123-4567 東京都渋谷区○○○1-2-3</p>
          <p><strong>最寄り駅:</strong> 渋谷駅から徒歩5分</p>
          <p><strong>駐車場:</strong> 医院前に2台分の駐車場があります</p>
        </div>
        <div style={{ marginTop: 16 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.669726232799!2d139.6983823152582!3d35.6591089801997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cae4c6b6e1b%3A0x7d6c6b6e1b6e1b6e!2z5p2x5Lqs6YO95paw5a6_5Yy65L2P5LqV!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact; 