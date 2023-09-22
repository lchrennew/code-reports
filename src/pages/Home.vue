<script setup>
import CodeScanningJobs from "../components/home/CodeScanningJobs.vue";

const props = defineProps({ solution: String, module: String, job: String })
</script>

<template>
    <a-layout>
        <a-layout-sider>
            <code-scanning-jobs/>
        </a-layout-sider>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<style scoped>

</style>