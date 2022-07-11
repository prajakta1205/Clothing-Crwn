import { useContext } from 'react';

import ProductCard from '../../product-card/product-card.component';

import { ProductsContext } from '../../context/product.context';

import './shop.style.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;