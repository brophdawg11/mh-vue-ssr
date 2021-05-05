import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore() {
    const store = new Vuex.Store({
        state: {
            value: 'Hello World!',
        },
    });

    if (process.env.VUE_ENV === 'client' && window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__);
    }

    return store;
}
