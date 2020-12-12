<template>
    <Row>
        <Skeleton v-if="loading"/>
        <Column v-else>
            <Title>{{ title }}</Title>
            <Number>R$ {{value.toFixed(2)}}</Number>
        </Column>
        <Icon>
            <fa-icon
                :icon="['fas',title === 'Entrada' ? 'hand-holding-usd' : title === 'Saída' ? 'receipt' : 'dollar-sign']"
            />
        </Icon>
    </Row>
</template>

<script>
    import { Number, Row, Column, Icon } from './styles';
    import { Skeleton } from 'vue-loading-skeleton';
    import Title from '../Title';

    export default {
        props:{
            title:String,
            value:Number,
            month:String
        },
        components:{
            Number,
            Row,
            Column,
            Icon,
            Skeleton,
            Title
        },
        data(){
            return{
                loading:false,
            }
        }
    }
</script>
