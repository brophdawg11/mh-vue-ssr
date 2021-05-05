import Vue from 'vue';

import createApp from './app/create-app';

const { app, router, store } = createApp();

router.onReady(() => {
    app.$mount('#app');

    router.beforeResolve(async (to, from, next) => {
        const components = router.getMatchedComponents(to);
        if (components[0].fetchData) {
            await components[0].fetchData(store);
        }
        next();
    });

});
