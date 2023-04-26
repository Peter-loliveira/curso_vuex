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
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      },
    ]
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      console.log(this.state.user);
      state.user = data;
      console.log(this.state.user);

    }
  },
  actions: {
  },
  modules: {
    // 
  }
})
