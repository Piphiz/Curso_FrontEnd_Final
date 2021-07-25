import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import HomeWork1 from '@/views/atividade1.vue'
import HomeWork2 from '@/views/atividade2.vue'
import HomeWork3 from '@/views/atividade3.vue'
import HomeWork4 from '@/views/atividade4.vue'
import HomeWork5 from '@/views/atividade5.vue'
import HomeWork6 from '@/views/atividade6.vue'
import HomeWork7 from '@/views/atividade7.vue'
import HomeWork8 from '@/views/atividade8.vue'
import HomeWork9 from '@/views/atividade9.vue'
import HomeWork10 from '@/views/atividade10.vue'
import HomeWork11 from '@/views/atividade11.vue'
import HomeWork12 from '@/views/atividade12.vue'
import Extra1 from '@/views/extra1.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/homework_01',
    name: 'Homework 1',
    component: HomeWork1
  },{
    path: '/homework_02',
    name: 'Homework 2',
    component: HomeWork2
  },{
    path: '/homework_03',
    name: 'Homework 3',
    component: HomeWork3
  },{
    path: '/homework_04',
    name: 'Homework 4',
    component: HomeWork4
  },{
    path: '/homework_05',
    name: 'Homework 5',
    component: HomeWork5
  },{
    path: '/homework_06',
    name: 'Homework 6',
    component: HomeWork6
  },{
    path: '/homework_07',
    name: 'Homework 7',
    component: HomeWork7
  },{
    path: '/homework_08',
    name: 'Homework 8',
    component: HomeWork8
  },{
    path: '/homework_09',
    name: 'Homework 9',
    component: HomeWork9
  },{
    path: '/homework_10',
    name: 'Homework 10',
    component: HomeWork10
  },{
    path: '/homework_11',
    name: 'Homework 11',
    component: HomeWork11
  },{
    path: '/homework_12',
    name: 'Homework 12',
    component: HomeWork12
  },{
    path: '/extra_01',
    name: 'Extra 1',
    component: Extra1
  }
]

const router = new VueRouter({
  routes
})

export default router
