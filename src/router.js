import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photo/photoList.vue'
import PhotoInfo from './components/photo/photoInfo.vue'
import GoodsList from './components/goods/goodsList.vue'
import GoodsInfo from './components/goods/goodsInfo.vue'
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/home/newsList', component: NewsList },
        { path: '/home/newsList/newsInfo/:id', component: NewsInfo },
        { path: '/home/photoList', component: PhotoList },
        { path: '/home/photoInfo/:id', component: PhotoInfo },
        { path: '/home/goodsList', component: GoodsList },
        {path: '/home/goodsInfo/:id',component:GoodsInfo,name:'goodsInfo'}
    ],
    linkActiveClass: 'mui-active'

})

export default router