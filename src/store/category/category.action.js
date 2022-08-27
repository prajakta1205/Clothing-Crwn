
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from '../../utils/reducers/reducers.util';

export const setCategories = (categoriesMap) =>{
  console.log(categoriesMap)
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)};