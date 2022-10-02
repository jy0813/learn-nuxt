import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

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

export { fetchProductById, fetchProductByKeyword }
