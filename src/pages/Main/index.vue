<template>
        <Wrapper>
            <Card id="c1" color="default">
                <Detail title="Entrada" :value="getDash.totalWin" />
            </Card>
            <Card id="c2" color="default">
                <Detail title="Saída" :value="getDash.totalLoss" />
            </Card>
            <Card id="c3" :color="getDash.diff>0 ? 'good' : 'bad'">
                <Detail title="Saldo" :value="getDash.diff" />
            </Card>
            <Card id="se">
                <Seletor />
            </Card>
            <Card id="ch">
                gráfico
                <!-- <Chart data={dash} /> -->
            </Card>
        </Wrapper>
</template>

<script>
    import { Wrapper } from './styles';
    import Card from '../../components/Card';
    import Detail from '../../components/Detail';
    import Seletor from '../../components/Selector';
    
    export default {
        components:{
            Wrapper,
            Card,
            Detail,
            Seletor
        },
        computed:{
            getUser(){
                return this.$store.getters.getUser.id
            },
            getMonth(){
                return this.$store.getters.getMonth
            },
            getDash(){
                return this.$store.getters.getDash
            }
        },
        created(){
            const data = {
                userId: this.getUser,
                month: this.getMonth
            }
            this.$store.dispatch('main',data)
        }
    }
</script>