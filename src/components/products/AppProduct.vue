<template>
    <div class="card">
        <div class="product">
            <b>Produto: </b>{{product.name}} -
            <b>Valor: </b> R$ {{product.price}}
            <button @click="addProduct()">Comprar</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'AppProduct',
        props: {
            product: Object
    },
        components: {
        },
        methods: {
            addProduct(){
                this.$store.commit('addProduct', this.product)
                alert(`${this.product.name} Adicionado ao carrinho`)
            }
        }
    }
</script>

<style>
    .card{
        margin-bottom: 5px;
        width: 20%;
        margin: 0 auto;
        padding: 5px 0;
        background-color: aquamarine;
        margin-bottom: 5px;
        border-radius: 5px;
        width: 500px;
    }
    
    .product{
        padding: 5px;
        display: flex;
        justify-content: space-around;
        
    }
</style>