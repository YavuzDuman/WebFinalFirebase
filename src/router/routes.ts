import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'uyeGiris', component: () => import('components/TheUyeGiris.vue') },
      { path: 'singup', component: () => import('components/SingUp.vue') },
      { path: 'icon', component: () => import('components/IconGeneral.vue') },
      { path: 'swiper', component: () => import('components/SwiperSlide.vue') },
      { path: 'footer', component: () => import('components/TheFooter.vue') },
      { path: 'header', component: () => import('components/TheHeader.vue') },
      { path: 'filtre', component: () => import('components/TheFiltre.vue') },
      { path: 'kargo', component: () => import('components/TheKargo.vue') },
      { path: 'sepet', component: () => import('components/TheSepet.vue') },
      { path: 'urun', component: () => import('components/TheUrun.vue') },
      { path: 'edebiyat', component: () => import('pages/EdebiyatPage.vue') },
      { path: 'sepetPage', component: () => import('pages/SepetPage.vue') },
      { path: 'uyeOlPage', component: () => import('pages/TheUyeOlPage.vue') },
      { path: 'signIn', component: () => import('pages/SignIn.vue') },
      { path: 'homePage', component: () => import('pages/HomePage.vue') },
    ],    
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
