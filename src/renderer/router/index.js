import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: require('@/page/list/index.vue').default
    },
    {
      path: '*',
      redirect: {
        name: 'list'
      }
    }
  ]
})
