<template>
    <div>
        <Wrapper>
            <Card>
                <Title>Mony</Title>
                
                <Space :size="24" />
                <div v-if="register">
                    <Label>Nome:</Label>
                    <Input type="text" :value="credential.nome" @onChange="credential.nome = $event" />
                    <Space :size="!register ? 24 : 18" />
                </div>

                <Label>E-mail:</Label>
                <Input type="text" :value="credential.email" @onChange="credential.email = $event" />

                <Space :size="!register ? 24 : 18" />

                <Label>Senha:</Label>
                <Input type="password" :value="credential.password" @onChange="credential.password = $event" />

                <Space :size="register ? 24 : 64" />


                <Button color="default" :block="true" :height="42" @click.native="login()">{{!register ? 'Entrar' : 'Cadastrar'}}</Button>
                
                <Space :size="24" />

                <Button color="secondary" :block="true" :height="42" @click.native="create()">{{register ? 'Voltar' : 'Cadastrar'}}</Button>
                
            </Card>
        </Wrapper>
    </div>
</template>

<script>
    import router from '../../routes'
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
                credential:{
                    name:'',
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            async page(){
                await localStorage.setItem('token','adaskjqkwjeqk')
                router.push('/dashboard')
            },
            
            login(){
                this.loading=true
                this.variant=!this.variant
                router.push('/dashboard')
                this.$store.commit('saveUser',this.credential)
            },

            create(){
                this.register=!this.register
            }
        }
    }
</script>