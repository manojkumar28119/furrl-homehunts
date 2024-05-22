import React from 'react';
import ShareButton from '../ShareButton';
import { BackgroundImg } from './styledComponents';
import './index.css'; 

const ProductItem = (props) => {
  const { item, currentItemNo } = props;
  const { id, title, brand, MRP, price, images, discountPercent } = item;
  const { name } = brand[0];
  const { src } = images[0];

  const specialWidth = currentItemNo === 3 || (currentItemNo - 3) % 5 === 0;
 
  return (
    <a
      href={`https://web.furrl.in/productDetail?id=${id}`}
      className={`product-list-item-link ${specialWidth ? 'product-list-item-link-full-width':''}`}
    >
      <div className="product-item-card">
        <BackgroundImg specialwidth={specialWidth} src={src} >
          <ShareButton url={`https://web.furrl.in/productDetail?id=${id}`} title={title} name="product-share-button" />
        </BackgroundImg>
        <div>
          <p className="product-brand-name">{name}</p>
          <p className="product-title">{title.length< 30 && !specialWidth ?title:`${title.slice(0,25)}..`}</p>
        </div> 
        <div className="product-prices-card">
          <p className="product-price">Rs. {price.value}</p>
          <p className="product-mrp">{MRP.value}</p>
          <p className="product-discount">{`${discountPercent} %`}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
