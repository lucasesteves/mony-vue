/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

//paginas públicas
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import store from './store/store'

Vue.use(VueRouter)
         
const auth = {
    beforeEnter: (to, from, next) => {
        const token = store.getters.getUser.email
        if(token){
            next()
        }else{
            next('/')
        }
    }
}

const routes=[
    {path:'/',component:Login},
    {path:'/dashboard',component:Dashboard,...auth},
    {path:'*',component:Login}
]

export default new VueRouter({
    mode:'history',//para ter um rota sem #
    routes,
    scrollBehavior(from,to,savedPosition){
        return{ x:0, y:0}
    }
})