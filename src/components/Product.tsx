import { useParams, useNavigate } from 'react-router-dom';

function Product() {
  const { id } = useParams(); // URLパラメータを取得
  const navigate = useNavigate(); // プログラム的なナビゲーション

  const products = {
    '1': { name: '商品A', price: '¥1,000', description: '素晴らしい商品Aです' },
    '2': { name: '商品B', price: '¥2,000', description: '素晴らしい商品Bです' },
    '3': { name: '商品C', price: '¥3,000', description: '素晴らしい商品Cです' }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="page">
        <h2>商品が見つかりません</h2>
        <button onClick={() => navigate('/')} className="submit-btn">
          ホームに戻る
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>{product.name}</h2>
      <div className="product-details">
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => navigate('/')} className="submit-btn">
          商品一覧に戻る
        </button>
      </div>
    </div>
  );
}

export default Product; 