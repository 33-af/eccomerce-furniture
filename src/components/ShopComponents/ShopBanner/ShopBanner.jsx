import './ShopBanner.css'

const ShopBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h2 className="banner__title">Most Sailed</h2>
        <div className="banner__pages">
          <a href="index.html">Home</a> / <a href="#">Most Sailed</a>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;