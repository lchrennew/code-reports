<script setup>
const props = defineProps({ solution: String, module: String, job: String })

</script>

<template>
    <router-link :to="{name: '代码报告:我的空间/报告详情', params: {job: 1}}">报告1</router-link>
    <router-link :to="{name: '代码报告:我的空间/报告详情', params: {job: 2}}">报告2</router-link>
    <router-link :to="{name: '代码报告:我的空间/报告详情', params: {job: 3}}">报告3</router-link>
    <router-view/>
</template>

<style scoped>

</style>