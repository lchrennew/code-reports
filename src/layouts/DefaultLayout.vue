<script setup>

import DefaultHeader from "./DefaultHeader.vue";
</script>

<template>
    <a-layout class="layout">
        <a-layout-header class="layout-header">
            <default-header/>
        </a-layout-header>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<style scoped lang="less">
.layout {
    min-height: 100vh;

    .layout-header {
        background-color: #fff;
        position: sticky;
        top: 0;
        padding: 0 1em;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
    }

    & > main {
        display: flex;
        flex-direction: column;

        .layout-footer {
            background-color: #000000aa;
            color: #eeeeee;
            text-align: right;
        }
    }
}
</style>