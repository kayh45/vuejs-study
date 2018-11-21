import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import ChapterOne from '@/components/ChapterOne'
import ChapterTwo from '@/components/ChapterTwo'
import ChapterThree from '@/components/ChapterThree'
import ChapterFour from '@/components/ChapterFour'
import ChapterFive from '@/components/ChapterFive'
import ChapterSix from '@/components/ChapterSix'

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
    },
    {
      path: '/ch3',
      name: 'ChapterThree',
      component: ChapterThree
    },
    {
      path: '/ch4',
      name: 'ChapterFour',
      component: ChapterFour
    },
    {
      path: '/ch5',
      name: 'ChapterFive',
      component: ChapterFive
    },
    {
      path: '/ch6',
      name: 'ChapterSix',
      component: ChapterSix
    }

  ]
})
