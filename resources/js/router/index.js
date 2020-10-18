import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '../views/BookIndex'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: BookIndex,
        },
        {
            path: '/book/:bookId',
            name: 'book',
            component: () => import('../views/BookShow'),
        }
    ]
})

export default router