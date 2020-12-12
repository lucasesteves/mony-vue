import router from '../../routes';

const dashboard={
    state: {
        dash:{
            totalWin:0,
            totalLoss:0,
            diff:0
        },
        gain:[
            {_id:'2',name:'Roupa',value:'20.00'}
        ],
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
            router.push('/dashboard')
        },
        changePage(state,data){
            state.page=data
        },
        logout(state){
            return state.credential.email=''
        }
        
    },
    actions:{
        
    }
}

export default dashboard;