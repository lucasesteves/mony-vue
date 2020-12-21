<template>
    <Main>
        <Card id="c1">
            <Title>Lucro - {{ getMonth }}</Title>
            <Button color="default" :height="52" :width="200" :block="false" @click.native="handlerModal()">Entrada</Button>
        </Card>
        <Card id="c2" color="good">
            <Detail title="Saldo" :value="getTotalWin" />
        </Card>
        <Card id="li">
            <Table :list="getGain" :remove="(_id)=>this.removeGain(_id)" />
        </Card>
        <Modal :open="open" title="Adicionar lucro" variant="gain" :close="this.handlerModal" />
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
            Modal,
            Table
        },
        data(){
            return{
                open:false,
            }
        },
        computed:{
            getMonth(){
                return this.$store.getters.getMonth 
            },
            getGain(){
                return JSON.parse(JSON.stringify(this.$store.getters.getGain))
            },
            getUser(){
                return this.$store.getters.getUser.id
            },
            getTotalWin(){
                return this.$store.getters.getSumOfGain
            }
        },
        methods:{
            handlerModal(){
                this.open=!this.open
            },
            removeGain(value){
                const data = { type:'gain', id:value }
                this.$store.dispatch('remove',data)
            }
        },
        created(){
            const data = {
                type:"gain",
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