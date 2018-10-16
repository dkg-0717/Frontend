import home from './components/home.vue';
import link from './components/link.vue';
import login from './components/login/login.vue';

export const routes = [
    { path: '/home', component: home },
    { path: '/link', component: link },
    { path: '/', component: login }
];