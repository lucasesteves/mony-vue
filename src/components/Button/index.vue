<template>
    <Button :color="color" :block="block" :height="height">
        <slot></slot>
    </Button>
</template>

<script>

    import { Button } from './styles';

    export default {
        components:{
            Button
        },
        props:{
            color:String,
            block:Boolean,
            height:Number,
        },

        data(){
            return{

            }
        }
      
    }
</script>