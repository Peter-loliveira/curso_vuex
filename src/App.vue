<template>
  <img class="logo_mini" alt="Vue logo" src="./assets/logo.png" />

  <AppProducts />
  <hr>
  <div>
    <button @click="updateUser()">Atualizar Perfil</button>
    <h3>
      {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}
      <br />
      {{ $store.state.user.email }}
    </h3>
  </div>
</template>

<script>

import AppProducts from './components/products/AppProducts.vue';

export default {
  name: "App",
  components: {
    AppProducts,
  },
  data() {
    return {
      newUser: {}
    };
  },
  methods: {
    updateUser() {
      if (this.$store.state.user.first_name !== "Peter") {
        this.newUser = {
          first_name: "Peter",
          last_name: "Lange",
          email: "peter.lange@email.com",
        };
      } else {
        this.newUser = {
          first_name: "Novos",
          last_name: "Dados",
          email: "novos@dados.com",
        };
      }
      this.$store.commit("storeUser", this.newUser);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo_mini{
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}
</style>
