<template>
    <Main>
        <Card id="c1">
            <Title>Despesa - {{ getMonth }}</Title>
            <Button color="default" :height="52" :width="200" @click.native="handlerModal()">Entrada</Button>
        </Card>
        <Card id="c2" color="bad">
            <Detail title="Saldo" :value="getTotalLoss" />
        </Card>
        <Card id="li">
            <Table :list="getLoss" :remove="(_id)=>this.removeLoss(_id)" />
        </Card>
        <Modal :open="open" title="Adicionar gasto" variant="loss" :close="this.handlerModal" />
    </Main>
</template>

<script>
    import { Main } from './styles';
    import Card from '../../components/Card';
    import Button from '../../components/Button';
    import Title from '../../components/Title';
    import Detail from '../../components/Detail';
    import Modal from '../../components/Modal';
    import Table from '../../components/Table';

    export default {
        components:{
            Main,
            Button,
            Card,
            Title,
            Detail,
            Table,
            Modal
        },
        data(){
            return{
                open:false
            }
        },
        computed:{
            getMonth(){
                return this.$store.getters.getMonth 
            },
            getLoss(){
                return this.$store.getters.getLoss
            },
            getUser(){
                return this.$store.getters.getUser.id
            },
            getTotalLoss(){
                return this.$store.getters.getSumOfLoss
            }
        },
        methods:{
            handlerModal(){
                this.open=!this.open
            },
            removeLoss(value){
                const data = { type:'loss', id:value }
                this.$store.dispatch('remove',data)
            }
        },
        created(){
            const data = {
                type:"loss",
                data:{
                    userId:this.getUser,
                    month:this.getMonth
                }
            }
            this.$store.dispatch('operations',data)
            this.$store.dispatch('totalValue',data)
        }
    }
</script>