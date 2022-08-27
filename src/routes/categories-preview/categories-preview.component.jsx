
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { selectCategoriesMap } from '../../store/category/category.selector';



const CategoriesPreview = () => {
  const { categoriesMap } = useSelector(selectCategoriesMap);
  console.log(selectCategoriesMap.categoriesMap)
  return (
    <Fragment>

       {!categoriesMap || categoriesMap!=undefined ? Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      }):{}} 
    </Fragment>
  );
};

export default CategoriesPreview;