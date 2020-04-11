import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
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
let app = new Vue({
    el:'#app',
    data:{

    },
    render: param => param(main),
})