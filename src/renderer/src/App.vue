<script setup>
import NavigationDrawer from './components/navigation-drawer.vue'
</script>

<template>
    <div>
        <navigation-drawer/>
        <router-view/>
    </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
