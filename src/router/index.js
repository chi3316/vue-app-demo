import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)
//1. 创建路由组件 : viwes
//2.将路由与组件进行映射
const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            { path: '/home', component: Home },
            { path: '/user', component: User },
            { path: '/mall', component: Mall },
            { path: '/page1', component: PageOne },
            { path: '/page2', component: PageTwo },
        ]
    },
]
//3.创建router实例
const router = new VueRouter({
    routes //`routes: routes` 的缩写
    //routers  我的发，拼写错了
})

export default router
