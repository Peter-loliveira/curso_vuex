<template>
    <div>
        
        <h3>
            lista de Produtos:
        </h3>
        
        <AppProduct 
        v-for="product in $store.state.products"
        :key = 'product.id'
        :id = product.id
        /> 
      
    </div>
</template>

<script>
    import AppProduct from './AppProduct.vue';
    export default {
        name: 'AppProducts',
        components: {
            AppProduct,
        },
        data(){
            return {

            }
        },
    }
</script>

<style>

</style>