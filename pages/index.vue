<template>
  <div>
    <h1>메인</h1>
    <div>{{ products }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const response = await axios.get('http://localhost:8000/products')
    const products = response.data
    return { products }
  },
}
</script>
