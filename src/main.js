import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import main from './App.vue'
import MintUI from 'mint-ui'
Vue.use(MintUI)  //全部导入
// import { Header,} from 'mint-ui'
// Vue.component(Header.name,Header)
// import 'mint-ui/lib/style.min.css'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/mint-ui.common.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
    
    },
    mutations:{
    
    },
    getters:{
    
    },
})
let app = new Vue({
    el:'#app',
    data:{

    },
    render: param => param(main),
    router:router
})