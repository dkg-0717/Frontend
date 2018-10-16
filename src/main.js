import Vue from 'vue'
import App from './App.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// rutas
import { routes } from './routes';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})