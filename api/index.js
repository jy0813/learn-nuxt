import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

const fetchProductById = (id) => {
  return instance.get(`/products/${id}`)
}

export { fetchProductById }
