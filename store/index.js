import { fetchCartItems } from '~/api'

export const FETHCH_CART_ITEMS = 'FETCH_CART_ITEMS'

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
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  },
}

export const actions = {
  async [FETHCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit(
      'setCartItems',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
  },
  // nuxt app 이 실행될때
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETHCH_CART_ITEMS)
  //   // const { data } = await fetchCartItems()
  //   // storeContext.commit(
  //   //   'setCartItems',
  //   //   data.map((item) => ({
  //   //     ...item,
  //   //     imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  //   //   }))
  //   // )
  // },
}
