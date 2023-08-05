//该文件专门用于创建整个应用的路由器
import Vue from 'vue'
// 引入插件
import VueRouter from 'vue-router'

// 引入组件
import About from '../components/About'
import Home from '../components/Home'

// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})


// 导出/暴露路由模块
export default router