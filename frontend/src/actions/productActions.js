import { PRODUCT_LIST } from '../constants/productConstants'
import { fetchProducts } from '../services/products'

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
    dispatch({
      type: PRODUCT_LIST.FAIL,
      payload:
        err.responce && err.responce.data.message
          ? err.responce.data.message
          : err.message,
    })
  }
}
