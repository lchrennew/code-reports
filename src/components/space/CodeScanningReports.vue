<script setup>

import CodeScanningReportsHeader from "./side/CodeScanningReportsHeader.vue";
import CodeScanningReportsList from "./side/CodeScanningReportsList.vue";
import { inject, ref } from "vue";

const reports = inject('reports')
const keyword = ref('')
</script>

<template>

    <code-scanning-reports-header v-model:value="keyword"/>
    <code-scanning-reports-list v-bind="{reports, keyword}"/>
</template>

<style scoped lang="less">
.reports-header {

}

.reports-list {
    flex: 1;
}
</style>