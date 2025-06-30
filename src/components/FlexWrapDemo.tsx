import './FlexWrapDemo.css';

function FlexWrapDemo() {
  return (
    <div className="demo-container">
      <h2>flex-wrap の動作確認</h2>
      
      <div className="demo-section">
        <h3>1. flex-wrap: nowrap (デフォルト)</h3>
        <div className="flex-container nowrap">
          <div className="flex-item">アイテム1</div>
          <div className="flex-item">アイテム2</div>
          <div className="flex-item">アイテム3</div>
          <div className="flex-item">アイテム4</div>
          <div className="flex-item">アイテム5</div>
        </div>
      </div>

      <div className="demo-section">
        <h3>2. flex-wrap: wrap</h3>
        <div className="flex-container wrap">
          <div className="flex-item">アイテム1</div>
          <div className="flex-item">アイテム2</div>
          <div className="flex-item">アイテム3</div>
          <div className="flex-item">アイテム4</div>
          <div className="flex-item">アイテム5</div>
        </div>
      </div>

      <div className="demo-section">
        <h3>3. flex-wrap: wrap-reverse</h3>
        <div className="flex-container wrap-reverse">
          <div className="flex-item">アイテム1</div>
          <div className="flex-item">アイテム2</div>
          <div className="flex-item">アイテム3</div>
          <div className="flex-item">アイテム4</div>
          <div className="flex-item">アイテム5</div>
        </div>
      </div>
    </div>
  );
}

export default FlexWrapDemo; 