<template>
    <div>
        <h1>Page 2</h1>
        <p>Store value: {{ $store.state.value }}</p>
    </div>
</template>

<script>
export default {
    name: 'Page2',
    async fetchData(store) {
        await new Promise(r => setTimeout(r, 1000));
        store.state.value = `Page2: ${Math.random() * 100}`;
    }
};
</script>
