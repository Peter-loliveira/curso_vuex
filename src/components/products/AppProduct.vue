<template>
    <div class="lista">
         <b>Produto: </b>{{$store.state.products[this.id - 1].name}} -
         <b>Valor: </b> R$ {{$store.state.products[this.id - 1].price}}
         <hr>
    </div>
</template>

<script>
    export default {
        name: 'AppProduct',
        props:['id'],
        components: {
        }
    }
</script>

<style>
    .lista{
        margin-bottom: 5px;
        width: 20%;
        margin: 0 auto;
        justify-content: space-between;
        
    }
</style>