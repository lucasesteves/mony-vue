<template>
    <Wrapper>
        <Name>Olá, Nome</Name>
        <div v-for="(e,index) in elements" :key="index">
            <Row :persist="e.page==currentPage ? true : false" @click="change(e.page)">
                <fa-icon :icon="['fas',e.icon]" />
                <Item>{{e.name}}</Item>
            </Row>
        </div>
    </Wrapper>
</template>

<script>
    import { 
        Row, 
    Wrapper, Item, Name } from './styles';

    export default {
        components:{
            Row,
            Wrapper,
            Item,
            Name
        },
        computed:{
            currentPage(){
                return this.$store.getters.getPage 
            }
        },
        data(){
            return{
                // page:this.$store.getters.getPage,
                elements:[
                    {name:'Dashboard', icon:'table', page:''},
                    {name:'Meus Lucros', icon:'money-bill', page:'wins'},
                    {name:'Meus Gastos', icon:'wallet', page:'wastes'},
                    // {name:'Dashboard', page:'dashboard'},
                    // {name:'Meus Lucros', page:'wins'},
                    // {name:'Meus Gastos', page:'wastes'}
                ]
            }
        },
        methods:{
            change(value){
                this.$store.commit('changePage',value)
            }
        }
    }
</script>
