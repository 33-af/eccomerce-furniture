import './ProductsCard.css';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const ProductsCard = ({ id, image, title, category, price, description }) => (
  <div className="projects__card anim-items">
    <Link to={`/product/${id}`}>
      <img src={image} alt={title} />
    </Link>
    <div className="projects__card__content flex">
      <div className="projects__card__text__content">
        <div className="projects__card__modern">
         {title}
        </div>
        <div className="projects__card__decor">{category}</div>
        <div className="projects__card__description">{description}</div>
      </div>
      <div className="price">{price}$</div>
      <button className="favoritesButton">
        <FaRegHeart className="heart" />
        <FiShoppingCart className="cart" />
      </button>
    </div>
  </div>
);

export default ProductsCard;