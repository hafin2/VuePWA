import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import HomeView from '@/components/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    }
  ]
})
