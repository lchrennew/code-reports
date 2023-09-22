<script setup>

import DefaultLayoutHeader from "./DefaultLayoutHeader.vue";
</script>

<template>
    <a-layout>
        <default-layout-header/>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<style scoped>

</style>