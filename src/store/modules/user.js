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
        loading:false,
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
            state.month = currentMonth()
            router.push('/')
        },
        logoutAccount(state){
            localStorage.removeItem('vuex')
            state.token = ''
            state.user = {}
            router.push('/login')
        }        
    },
    actions:{
        async authenticate({ commit }, payload){
            const response = await api.post(payload.type,payload.data)
            commit('login',response)
        }
    }
}

export default user;