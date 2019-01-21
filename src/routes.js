import AuthPage from './assets/vue/pages/auth.vue';
import ChangeLang from './assets/vue/pages/lang.vue';
import MainPage from './assets/vue/pages/main.vue';
import RegPage from './assets/vue/pages/reg.vue';


export default [
  {
    path: '*',
    redirect: '/auth'
  },
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path:'/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/change-lang/',
    name: 'lang',
    component: ChangeLang
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/reg/',
    name: "signUp",
    component: RegPage
  }
]
