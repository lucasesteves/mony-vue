<template>
    <Title :font="font" :bottom="bottom">
        <slot></slot>
    </Title>
</template>

<script>
    import { Title } from './styles';

    export default {
        props:{
            font:Number,
            bottom:Number
        },
        components:{
            Title
        }
    }
</script>
