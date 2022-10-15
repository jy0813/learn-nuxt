import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseURL,
})

const fetchProducts = () => {
  return instance.get(`/products`)
}

const fetchProductById = (id) => {
  return instance.get(`/products/${id}`)
}

const fetchProductByKeyword = (keyword) => {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

const createCartItem = (cartItem) => {
  return instance.post(`/carts`, cartItem)
}

const fetchCartItems = () => {
  return instance.get(`/carts`)
}

export {
  fetchProducts,
  fetchProductById,
  fetchProductByKeyword,
  createCartItem,
  fetchCartItems,
}
