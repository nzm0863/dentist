import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1><a href="/sigotoru1">さわやか歯科クリニック</a></h1>
        
        {/* ナビゲーション */}
        <nav className="nav">
          <Link to="/" className="nav-link">
            ホーム
          </Link>
          <Link to="/about" className="nav-link">
            歯科の概要
          </Link>
          <Link to="/contact" className="nav-link">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;