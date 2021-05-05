<template>
    <div id="app">
        <header>
            <nav>
                <router-link to="/">Page 1</router-link> |
                <router-link to="/page2">Page 2</router-link>
            </nav>
        </header>

        <main>
            <router-view />
        </main>
        <footer>Footer</footer>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
body {
    background-color: lightgrey;
}
</style>
