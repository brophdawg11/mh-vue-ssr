<template>
    <div>
        <h1>Page 1</h1>
        <p>Store value: {{ $store.state.value }}</p>
    </div>
</template>

<script>
export default {
    name: 'Page1',
    async fetchData(store) {
        await new Promise(r => setTimeout(r, 1000));
        store.state.value = `Page1: ${Math.random() * 100}`;
    }
};
</script>
