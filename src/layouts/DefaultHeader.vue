<script setup>
import { SpaceSwitcher } from "spaces-vue3";
import { useRouter } from "vue-router";
import { getMine } from "../services/spaces.js";


const router = useRouter()
const onChange = ({ solution, module }) => router.push({ name: '代码报告:我的空间', params: { solution, module } })

</script>

<template>
    <div>
        <space-switcher container="code-report" :get-mine="getMine" consumer="admin" @change="onChange"/>
    </div>
    <div>

    </div>
</template>

<style scoped lang="less">
</style>