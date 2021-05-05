import Vue from 'vue';

import router from './app/router.js';
import store from './app/store.js';
import App from './components/App.vue';

const app = new Vue({
    router,
    store,
    render: h => h(App),
});

app.$mount('#app');
