import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import ChapterOne from '@/components/ChapterOne'
import ChapterTwo from '@/components/ChapterTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ch1',
      name: 'ChapterOne',
      component: ChapterOne
    },
    {
      path: '/ch2',
      name: 'ChapterTwo',
      component: ChapterTwo
    }

  ]
})
