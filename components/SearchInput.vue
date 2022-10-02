<template>
  <div>
    <div class="input-wrapper flex">
      <input
        type="text"
        :value="value"
        class="search-input"
        @input="$emit('input', $event.target.value)"
      />
      <button class="btn" type="button" @click="$emit('search')">search</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
