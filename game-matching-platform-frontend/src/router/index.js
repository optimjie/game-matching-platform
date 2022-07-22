import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RankListIndexView from '../views/rankList/RankListIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import UserIndexView from '../views/user/UserIndexView'
import NotFoundView from '../views/error/NotFoundView'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'pk',
  },
  {
    path: '/pk',
    name: 'pkIndexView',
    component: PkIndexView,
  },
  {
    path: '/rankList',
    name: 'rankListIndexView',
    component: RankListIndexView,
  },
  {
    path: '/record',
    name: 'recordIndexView',
    component: RecordIndexView,
  },
  {
    path: '/user',
    name: 'userIndexView',
    component: UserIndexView,
  },
  {
    path: '/404',
    name: 'notFoundView',
    component: NotFoundView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
