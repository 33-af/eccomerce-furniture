import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Images from '../../assets/index';
import { Banner_Product_Category } from '../../assets/index'; 



//Описание товара по id
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                console.log(id); // Logging id
                const response =  await axios.get(`http://localhost:3035/productDetail/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProductById();
    }, [id]);

    const getImage = (imageName) => {
        return Images[imageName] || null;
    };

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <div className="banner_prodact">
                <img src={Banner_Product_Category} className="bannerPhoto" />
            </div>

            <div className="content">
                <div className="container">
                    <div className="topContent">
                        <div className="left">
                            <div className="infoLabels">
                                <div className="infoLabel infoItem">Client</div>
                                <div className="infoLabel infoItem">Category</div>
                                <div className="infoLabel infoItem">Tags</div>
                                <div className="infoLabel infoItem">Date</div>
                                <div className="infoLabel infoItem">Link</div>
                            </div>
                            <div className="infoValues">
                                <div className="infoValue infoItem">{product.client}</div>
                                <div className="infoValue infoItem">{product.Category}</div>
                                <div className="infoValue infoItem">{product.tags}</div>
                                <div className="infoValue infoItem">{product.date}</div>
                                <div className="infoValue infoItem">{product.link}</div>
                            </div>
                        </div>
                        <div className="right">
                            <h2 className="title">{product.title}</h2>
                            <div className="description">
                                {product.description}
                            </div>
                        </div>
                    </div>
                    <img src={getImage(product.image)} alt={product.title} className="productImage"/>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;