import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CarView from '@/views/CarView.vue';
import CarsCompare from '@/views/CarsCompare.vue';
import ConsultationView from '@/views/ConsultationView.vue';
import ContactsView from '@/views/ContactsView.vue';

const routes = 
[
    {path: '/', component: HomeView},
  { path: '/cars', component: CarView },
  {path: '/compare', component: CarsCompare},
  {path:'/consultation', component: ConsultationView},
  {path: '/contacts', component: ContactsView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;