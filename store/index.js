export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    const NewCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(NewCartItem)
  },
}
