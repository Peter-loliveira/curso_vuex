<template>
    <div>
        {{ $store.state.product[id].name }}
    </div>
</template>

<script>
    export default {
        name: 'AppProduct',
        props:['id'],
        data(){
            return{

            }
        },
        components: {
        }
    }
</script>

<style>

</style>