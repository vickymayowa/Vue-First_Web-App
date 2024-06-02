import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutUs from '../views/About/AboutUs.vue'
import Companyinfo from '../views/About/Companyinfo.vue'
import ProductView from '../views/ProductView.vue'
import TodoView from '../views/TodoView.vue'
import UserView from '../views/UserView.vue'
import ProductPage from '../views/ProductsPage.vue'
import RecipeView from '../views/Recipe.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about',
    children: [
      {
        path: 'about-us',
        name: 'uss',
        component: AboutUs
      },
      {
        path: 'our-company',
        name: 'company',
        component: Companyinfo
      }
    ]
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  },
  {
    path: '/todo',
    component: TodoView
  },
  {
    path: '/recipe',
    component: RecipeView
  },
  {
    path: '/products',
    component: ProductView
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
