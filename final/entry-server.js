import Vue from 'vue';

import createApp from './app/create-app.js';

export default function initServer(context) {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        router.push(context.url);
        router.onReady(async () => {
            try {
                const components = router.getMatchedComponents();
                if (components.length === 0) {
                    return reject({ code: 404 });
                }
                if (components[0].fetchData) {
                    await components[0].fetchData(store);
                }
                context.state = store.state
                resolve(app);
            } catch (e) {
                reject(e);
            }
        });
    });
}
