<template>
        <Wrapper>
            <Card id="c1" color="default">
                <Detail title="Entrada" :value="dash.totalWin" />
            </Card>
            <Card id="c2" color="default">
                <Detail title="Saída" :value="dash.totalLoss" />
            </Card>
            <Card id="c3" :color="diff>0 ? 'good' : 'bad'">
                <Detail title="Saldo" :value="dash.diff" />
            </Card>
            <Card id="se">
                <Seletor />
                <!-- seletor -->
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
        data(){
            return{
                dash:{
                    diff:50,
                    totalWin:200,
                    totalLoss:150
                }
            }
        }
    }
</script>