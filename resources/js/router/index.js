import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Index',
    component: function(){
        return import ('../views/Index.vue')
    }
  },
  {
    path: '/clientes',
    name: 'Client',
    component: function(){
      return import('../views/Client.vue')
    },
    children: [
      {
        path: ':cedula',
        name: 'Editing',
        component: function(){
          return import ('../views/Editing.vue')
        },
        props: true
      }
    ]
  },
  {
    path: '/casos',
    name: 'Cases',
    component: function(){
        return import('../views/Cases.vue')
    }
  },
  {
    path: '/abogados',
    name: 'Lawyer',
    component: function () {
      return import('../views/Lawyer.vue')
    }
  },
  {
    path: '/asignacion-casos',
    name: 'asignationCase',
    component: function () {
      return import('../views/asignationCase.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
