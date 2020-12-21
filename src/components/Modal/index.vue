<template>
    <Wrapper :open="open">
        <Content>
            <Header>
                <Title>{{title}}</Title>
                <Icon @click="close">
                    <fa-icon
                        :icon="['fas','times']"
                    />
                </Icon>
            </Header>
            <Line/>
            <Label>Descrição</Label>
            <Input type="text" :height="42" placeholder="Ex: Comprei roupas" :value="name" @onChange="name = $event" />
            <Label>Valor</Label>
            <Input type="text" :height="42" placeholder="Ex: 200" :value="money" @onChange="money = $event" />
            <Space />
            <Button color="default" :height="42" :block="true" @click.native="confirm()">Confirmar</Button>
        </Content>
    </Wrapper>
</template>

<script>
    import { Wrapper, Content, Icon, Header, Label, Space, Line } from './styles';
    import Title from '../Title';
    import Input from '../Input';
    import Button from '../Button';

    export default {
        props:{
            open:Boolean,
            title:String,
            variant:String,
            close:Function
        },
        components:{
            Wrapper,
            Content,
            Header,
            Icon,
            Label,
            Space,
            Line,
            Title,
            Input,
            Button,
        },
        data(){
            return{
                name:'',
                money:''
            }
        },
        computed:{
            getMonth(){
                return this.$store.getters.getMonth 
            },
        },
        methods:{
            confirm(){
                const data = { 
                    type:this.variant, 
                    data:{
                        name:this.name, 
                        money:this.money,
                        month:this.getMonth 
                    } 
                }
                this.$store.dispatch('newOperation',data)
                this.close()
            }
        } 
    }
</script>