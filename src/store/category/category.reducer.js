import { CATEGORIES_ACTION_TYPES } from "./category.types";


export const CATEGORIES_INITIAL_STATE={
    categoriesMap:{}
}

export const categoriesReducer = (state =CATEGORIES_INITIAL_STATE, action={}) => {
    console.log('dispatched')
     console.log(action)
    const { type, payload } = action;
    console.log(type)
    console.log(payload)
    switch (type) {
      case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
        return { ...state, categoriesMap: payload };
        
      default:
        return state;
    }
  };