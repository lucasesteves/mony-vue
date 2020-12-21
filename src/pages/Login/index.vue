<template>
    <div>
        <Wrapper>
            <Card>
                <Title>Mony</Title>

                <Space :size="24" />
                <div v-if="register">
                    <Label>Nome:</Label>
                    <Input type="text" :value="name" @onChange="name = $event" />
                    <Space :size="!register ? 24 : 18" />
                </div>

                <Label>E-mail:</Label>
                <Input type="text" :value="email" @onChange="email = $event" />

                <Space :size="!register ? 24 : 18" />

                <Label>Senha:</Label>
                <Input type="password" :value="password" @onChange="password = $event" />

                <Space :size="register ? 24 : 64" />


                <Button color="default" :block="true" :height="42" @click.native="login()">{{!register ? 'Entrar' : 'Cadastrar'}}</Button>
                
                <Space :size="24" />

                <Button color="secondary" :block="true" :height="42" @click.native="create()">{{register ? 'Voltar' : 'Cadastrar'}}</Button>
                
            </Card>
        </Wrapper>
    </div>
</template>

<script>
    import { Wrapper, Card, Title, Label, Space } from './styles'
    import Button from '../../components/Button'
    import Input from '../../components/Input'

    export default {
        components: {
            Wrapper,
            Card,
            Title,
            Button,
            Label,
            Input,
            Space,
            // Load
        },
        data(){
            return{
                variant:true,
                loading:false,
                register:false,
                name:'',
                email:'',
                password:''
            }
        },
        computed:{
            user(){
                return this.$store.getters.getUser
            }
        },
        methods:{            
            login(){
                this.loading=true
                this.variant=!this.variant
                let data
                if(!this.register){
                    data = { data: { email:this.email, password:this.password }, type:'login' }
                }else{
                    data = { data: { name:this.name, email:this.email, password:this.password }, type:'register' }
                }
                this.$store.dispatch('authenticate',data)
            },

            create(){
                this.register=!this.register
            }
        }
    }
</script>