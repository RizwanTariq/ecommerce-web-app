import axios from 'axios'
export const fetchProducts = async () => {
  const { data } = await axios.get('/api/products')
  return data
}
export const fetchProduct = async (id) => {
  const { data } = await axios.get(`/api/products/${id}`)
  return data
}
