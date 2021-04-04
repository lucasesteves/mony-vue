import Vue from 'vue';
import router from '../../routes';
import api from '../../services/api';
import { currentMonth } from '../../services/months';

const user={
    state: {
        page:'dashboard',
        user:{},
        token:'',
        month:'',
        signed:false,
        authLoading:false,
    },
    getters:{
        getUser(state){
            return state.user
        },
        getPage(state){
            return state.page
        },
        getMonth(state){
            return state.month
        },
        getToken(state){
            return state.token
        },
        authenticateLoading(state){
            return state.authLoading
        }
    },
    mutations:{
        saveUser(state,data){
            state.credential = data
            router.push('/')
        },
        changePage(state,data){
            state.page = data
        },
        logout(state){
            state.credential.email = ''
        },
        setMonth(state,data){
            state.month = data
        },
        login(state,data){
            state.user = data.data.user
            state.token = data.data.token
            state.authLoading = false 
            state.month = currentMonth()
            router.push('/')
        },
        logoutAccount(state){
            localStorage.removeItem('vuex')
            state.token = ''
            state.user = {}
            state.authLoading = false 
            router.push('/login')
        },
        setLoading(state,data){
            state.authLoading = data 
        }        
    },
    actions:{
        async authenticate({ commit }, payload){
            try{
                commit('setLoading', true)
                const response = await api.post(payload.type,payload.data)
                    if(response.status === 200){
                        commit('login',response)
                    }
            }catch(error){
                commit('setLoading', false)
                Vue.$vToastify.info("Error",error.response.data.message);
            }
        }
    }
}

export default user;