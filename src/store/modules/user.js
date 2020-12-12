/* eslint-disable */
// import Vue from 'vue';
import router from '../../routes';



const user={
    state: {
        credential:{
            name:'',
            email:'',
            password:''
        },
        page:'dashboard',
        user:{
            id:'',
            name:'',
            email:''
        },
        token:'',
        month:'',
        signed:false,
        loading:false,
    },
    getters:{
        getUser(state){
            return state.credential
        },
        getPage(state){
            return state.page
        },
        getMonth(state){
            return state.month
        }
    },
    mutations:{
        saveUser(state,data){
            state.credential=data
            router.push('/dashboard')
        },
        changePage(state,data){
            state.page=data
        },
        logout(state){
            state.credential.email=''
        },
        setMonth(state,data){
            state.month=data
        }
        
    },
    actions:{
        
    }
}

export default user;