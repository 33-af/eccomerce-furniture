
// import { useState } from 'react';
import './FavoriteCart.css'
// import projects from '../../Db/Db';

const FavoriteCart = () => {
    // const [products, setProducts] = useState(projects);

    // const handleRemove = (id) => {
    //     setProducts(products.filter((product) => product.id !== id));
    // };
  
    // const handleClear = () => {
    //     setProducts([]);
    // };
   
  
    return (
        <div className="shop-cart">
            {/* {products.length === 0 ? ( */}
                <div className="empty-message">No items have been added to favorites</div>
            {/* ) : ( */}
                <>
                <div className="button-wrapper">
                  {/* вернуться на ту странциу с которой пришёл */}
                    <button className="return-button">Go Back</button>
                    <button className="clear-button">Delete</button>
                    </div>
                    <div className="product-grid">
                        {/* {products.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img className="product-image" src={product.image} alt={product.title} />
                                <div className="product-info">
                                    <h2 className="product-title">{product.title}</h2>
                                    <p className="product-category">{product.category}</p>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-price">{product.price}$</div>
                                </div>
                                <button className="remove-button" onClick={() => handleRemove(product.id)}>Удалить</button>
                            </div>
                        ))} */}
                    </div>
                </>
            {/* )} */}
        </div>
    );
  };

export default FavoriteCart
