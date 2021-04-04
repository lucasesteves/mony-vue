<template>
    <div>
        <clip-loader :loading="loading" color="default"></clip-loader>
    </div>
</template>

<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    export default{
        components:{
            ClipLoader
        },
        props:{
            loading:Boolean,
            color:String
        }, 
    }
</script>
