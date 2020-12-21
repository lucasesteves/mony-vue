<template>
    <div>
        <Wrapper>
            <Head>
                <Header/>
            </Head>
            <Menu>
                <Drawer />
            </Menu>
            
            <Main v-if="currentPage=='dashboard'" /> 
            
            <Wins v-else-if="currentPage=='wins'"/> 
            
            <Wastes v-else/>
        </Wrapper>
    </div>
</template>

<script>
    import { Wrapper, Head, Menu } from './styles';
    import Main from '../Main';
    import Header from '../../components/Header';
    import Drawer from '../../components/Drawer';
    import Wins from '../Wins';
    import Wastes from '../Wastes';

    export default {
        components:{
            Wrapper,
            Head,
            Menu,
            Main,
            Header,
            Drawer,
            Wins,
            Wastes
        },
        computed:{
            currentPage(){
                return this.$store.getters.getPage
            }
        },
        data(){
            return{
                
            }
        },
        methods:{
        
        },
        
    }
</script>