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
            <Seletor :font="16" :bottom="16" title="Mês" />
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
    import Seletor from '../Selector';

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
            Seletor
        },
        data(){
            return{
                name:'',
                money:''
            }
        },
        methods:{
            confirm(){
                console.log(this.name)
                console.log(this.money)
                this.close()
            }
        } 
    }
</script>