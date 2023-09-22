<script setup>
import { SpaceSwitcher } from "spaces-vue3";
import { useRouter } from "vue-router";
import { getMine } from "../spaces.js";



const router = useRouter()
const onChange = ({ solution, module }) => router.push({ name: '代码报告:我的空间', params: { solution, module } })

</script>

<template>
    <a-layout-header class="default-layout-header">
        <space-switcher container="app" :get-mine="getMine" consumer="admin" @change="onChange"/>
    </a-layout-header>
</template>

<style scoped lang="less">
.default-layout-header {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>