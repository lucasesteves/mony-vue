<template>
    <Wrapper>
        <Title>Histórico</Title>
        <div v-if="list.length>0">
        <Row v-for="(element,index) in list" :key="index">
            <Item>{{element.name}}</Item>
            <Item>R$ {{element.value}}</Item>
            <Icon @click="()=>remove(element._id)">
                <fa-icon :icon="['fas','trash']" />
            </Icon>
        </Row>
        </div>
        <Empty v-else>Lista vazia</Empty>
    </Wrapper>
</template>

<script>
    import { Wrapper, Row, Item, Icon, Empty } from './styles';
    import Title from '../Title';

    export default {
        props:{
            list:Array,
            remove:Function
        },
        components:{
            Wrapper,
            Row,
            Item,
            Icon,
            Empty,
            Title
        },

    }
</script>