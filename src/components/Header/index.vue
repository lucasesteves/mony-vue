<template>
    <Wrapper>
        <Icon @click="handlerOpen()">
            <fa-icon :icon="['fas','bars']" style="color:#fff;height:32px;width:18px;" />
        </Icon>
        <Title>Mony</Title>
        <Button @click="logout()">Sair</Button>
        <MobileDrawer :open="open">
            <MobileWrapper>
                <Title>Menu</Title>
                <Icon @click="handlerOpen()">
                    <fa-icon :icon="['fas','times']" style="color:#fff;height:32px;width:18px;" />
                </Icon>
            </MobileWrapper>
            <Drawer/>
        </MobileDrawer>
    </Wrapper>
</template>

<script>
    import { Wrapper, Title, Button, Icon, MobileDrawer, MobileWrapper } from './styles';
    import Drawer from '../../components/Drawer';

    export default {
        components:{
            Wrapper,
            Title,
            Button,
            Icon,
            MobileDrawer,
            MobileWrapper,
            Drawer
        },
        data(){
            return{
                open:false
            }
        },
        methods:{
            handlerOpen(){
                this.open=!this.open
            },
            logout(){
                this.$store.commit('logout')
            }
        }
    }
</script>
