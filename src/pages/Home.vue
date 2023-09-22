<script setup>
const props = defineProps({ solution: String, module: String, job: String })
</script>

<template>
    <router-view/>

    <router-link :to="{name: '代码报告:我的空间', params: {solution: '1', module: '1'}}">系统1/项目1</router-link>
    <router-link :to="{name: '代码报告:我的空间', params: {solution: '1', module: '2'}}">系统1/项目2</router-link>
    <router-link :to="{name: '代码报告:我的空间', params: {solution: '2', module: '3'}}">系统2/项目3</router-link>
</template>

<style scoped>

</style>