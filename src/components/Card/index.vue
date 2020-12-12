<template>
    <Container :id="id" :color="color">
        <slot></slot>
    </Container>
</template>

<script>
    import { Container } from './styles';

    export default {
        components:{
            Container
        },
        props:{
            id:String,
            color:String,
        },  
        data(){
            return{

            }
        }        
    }
</script>