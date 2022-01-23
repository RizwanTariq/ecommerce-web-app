import { PRODUCT_DETAILS, PRODUCT_LIST } from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST.REQUEST:
      return { loading: true, ...state }

    case PRODUCT_LIST.SUCCESS:
      return { loading: false, products: [...action.payload] }

    case PRODUCT_LIST.FAIL:
      return { loading: false, error: [...action.payload] }

    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS.REQUEST:
      return { loading: true, ...state }

    case PRODUCT_DETAILS.SUCCESS:
      return { loading: false, product: { ...action.payload } }

    case PRODUCT_DETAILS.FAIL:
      return { loading: false, error: { ...action.payload } }

    default:
      return state
  }
}
