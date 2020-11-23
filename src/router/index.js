import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tiendas',
    name: 'Tiendas',
  
    component: () => import( '../views/Tiendas.vue')
  },
  {
    path: '/crear/tiendas',
    name: 'CrearTienda',

    component: () => import( '../views/CrearTienda.vue')
  },
  {
    path: '/editar/tiendas',
    name: 'EditarTienda',
   
    component: () => import( '../views/EditarTienda.vue')
  },
  {
    path: '/elimiar/tiendas',
    name: 'EliminarTienda',
  
    component: () => import( '../views/EliminarTienda.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
   
    component: () => import( '../views/Productos.vue')
  },
  {
    path: '/crear/productos',
    name: 'CrearProducto',

    component: () => import('../views/CrearProducto.vue')
  },
  {
    path: '/editar/productos',
    name: 'EditarProducto',

    component: () => import('../views/EditarProducto.vue')
  },
  {
    path: '/elimiar/productos',
    name: 'EliminarProducto',
   
    component: () => import( '../views/EliminarProducto.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
   
    component: () => import('../views/Registro.vue')
  },  
  {
    path: '/login',
    name: 'Login',

    component: () => import( '../views/Login.vue')
  }  
]

const router = new VueRouter({
  routes
})

export default router
