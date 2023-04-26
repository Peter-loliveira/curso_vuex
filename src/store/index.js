import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Peter',
      last_name: 'Lange',
      email: 'peter.lange@email.com',
    },
    products:[
      {
        id: 1,
        name: 'Bola',
        price: '100,00'
      },
      {
        id: 2,
        name: 'Chuteira',
        price: '200,00'
      },
      {
        id: 3,
        name: 'Meião',
        price: '50,00'
      },
    ]
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      state.user = data;
    }
  },
  actions: {
  },
  modules: {
    // 
  }
})
