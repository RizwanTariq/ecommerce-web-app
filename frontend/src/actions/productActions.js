import { PRODUCT_DETAILS, PRODUCT_LIST } from '../constants/productConstants'
import { fetchProduct, fetchProducts } from '../services/products'

//Action Creator Functions
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST.REQUEST })

    const data = await fetchProducts()
    dispatch({
      type: PRODUCT_LIST.SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.log('this is error', err)
    dispatch({
      type: PRODUCT_LIST.FAIL,
      payload:
        err.responce && err.responce.data.message
          ? err.responce.data.message
          : err.message,
    })
  }
}
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS.REQUEST })

    const data = await fetchProduct(id)
    dispatch({
      type: PRODUCT_DETAILS.SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS.FAIL,
      payload:
        err.responce && err.responce.data.message
          ? err.responce.data.message
          : err.message,
    })
  }
}
