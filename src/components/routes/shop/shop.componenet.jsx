import { useContext } from 'react';
import CategoryPreview from '../../category-preview/category-preview.component'

import { CategoriesContext } from '../../context/Categories.context';

import './shop.style.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
       {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;