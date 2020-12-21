import router from '../../routes';
import api from '../../services/api';
import { currentYear } from '../../services/months';

const dashboard={
    state: {
        dash:{},
        gain:[],
        sumOfGain:0,
        loss:[],
        sumOfLoss:0,
        loading:false
    },
    getters:{
        getDash(state){
            return state.dash
        },
        getGain(state){
            return state.gain
        },
        getSumOfGain(state){
            return state.sumOfGain
        },
        getLoss(state){
            return state.loss
        },
        getSumOfLoss(state){
            return state.sumOfLoss
        },
        getLoading(state){
            return state.loading
        }
    },
    mutations:{
        saveUser(state,data){
            state.credential=data
            router.push('/')
        },
        changePage(state,data){
            state.page=data
        },
        main(state,data){
            state.dash= data
        },
        operations(state,data){
            if(data.type==='gain'){
                state.gain = data.data
            }else{
                state.loss = data.data
            }
        },
        totalValue(state,data){
            if(data.type==='gain'){
                state.sumOfGain = data.data.total
            }else{
                state.sumOfLoss = data.data.total
            }
        },
        remove(state,data){
            if(data.type==='gain'){
                state.gain = state.gain.filter(e=>e._id !== data.id)
            }else{
                state.loss = state.loss.filter(e=>e._id !== data.id)
            }
        },
        newOperation(state,data){
            if(data.type==='gain'){
                state.gain = state.gain.push(data.data)
            }else{
                state.loss = state.loss.push(data.data)
            }
        }
        
    },
    actions:{
        async main({ commit }, payload){
            const year = currentYear()
            const response = await api.post('dashboard',{...payload, year})
            commit('main',response.data)
        },
        async operations({ commit }, payload){
            const year = currentYear()
            const response = await api.post(payload.type,{...payload.data, year})
            commit('operations',{data:response.data, type:payload.type})
        },
        async totalValue({ commit }, payload){
            const year = currentYear()
            const response = await api.post(`${payload.type}/total`,{...payload.data, year})
            commit('totalValue',{data:response.data, type:payload.type})
        },
        async newOperation({ commit }, payload){
            const year = currentYear()
            const response = await api.post('dashboard',{...payload.data, year })
            commit('newOperation', { data:response.data, type:payload.type })
        },
        async remove({ commit }, payload){
            await api.post(`${payload.type}/remove/${payload.id}`)
            commit('remove',payload)
        }
    }
}

export default dashboard;