import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: () => import(/* webpackChunkName: "page1" */ '../components/Page1.vue'),
}, {
    path: '/page2',
    component: () => import(/* webpackChunkName: "page2" */ '../components/Page2.vue'),
}];

export default new VueRouter({
    mode: 'history',
    routes,
});
