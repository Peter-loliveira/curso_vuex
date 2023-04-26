<template>
    <div>
        lista de Produtos:
        <AppProduct 
        v-for="product in $store.state.products"
        :key = 'product.id'
        id = 'procut.id'
        /> 
      
    </div>
</template>

<script>
    import AppProduct from './AppProduct.vue';
    export default {
        name: 'AppProducts',
        data(){
            return {

            }
        },
        components: {
            AppProduct,
        }
    }
</script>

<style>

</style>