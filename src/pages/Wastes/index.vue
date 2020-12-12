<template>
    <Main>
        <Card id="c1">
            <Title>Despesa - {{ getMonth }}</Title>
            <Button color="default" :height="52" :width="200" @click.native="handlerModal()">Entrada</Button>
        </Card>
        <Card id="c2" color="bad">
            <Detail title="Saldo" :value="total" />
        </Card>
        <Card id="li">
            <Table :list="getLoss" :remove="(_id)=>this.removeGain(_id)" />
        </Card>
        <Modal :open="open" title="Adicionar gasto" variant="gain" :close="this.handlerModal" />
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
                total:0,
                open:false
            }
        },
        computed:{
            getMonth(){
                return this.$store.getters.getMonth 
            },
            getLoss(){
                return this.$store.getters.getLoss
            }
        },
        methods:{
            handlerModal(){
                this.open=!this.open
            },
            removeGain(value){
                console.log(`Removeu ${value}`)
            }
        }
    }
</script>