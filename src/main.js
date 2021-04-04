import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/store';
import VueToastify from "vue-toastify";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faHandHoldingUsd, 
  faReceipt, 
  faDollarSign, 
  faTimes, 
  faTrash, 
  faTable, 
  faMoneyBill, 
  faWallet,
  faBars 
} from '@fortawesome/free-solid-svg-icons'

library.add(faHandHoldingUsd, faReceipt, faDollarSign, faTimes, faTrash, faTable, faMoneyBill, faWallet, faBars)
Vue.component('fa-icon',FontAwesomeIcon)

Vue.use(VueToastify,{
  position:'top-right',
  theme: 'light',
  iconEnabled: false
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
