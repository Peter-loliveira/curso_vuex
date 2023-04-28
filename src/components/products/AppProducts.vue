<template>
  <div>
    <h3>lista de Produtos:</h3>

    <AppProduct
      v-for="product in $store.state.products"
      :key="product.id"
      :product="product"
    />
    <hr />
    <h1>Carrinho de Compras - Total de Produtos: {{ $store.state.cart.length }}</h1>
    <div v-for="product in $store.state.cart" :key="product.id">
        <h2>{{product.name}} - {{product.price}}</h2>
        
    </div>
  </div>
</template>

<script>
import AppProduct from "./AppProduct.vue";
export default {
  name: "AppProducts",
  components: {
    AppProduct,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
