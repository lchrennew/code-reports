<script setup>
import CodeScanningReportTabs from "../components/report/CodeScanningReportTabs.vue";
import CodeScanningReportFilter from "../components/report/CodeScanningReportFilter.vue";
import CodeScanningReportTools from "../components/report/CodeScanningReportTools.vue";
import CodeScanningReportIssues from "../components/report/CodeScanningReportIssues.vue";

const props = defineProps({ solution: String, module: String, job: String })

</script>

<template>
    <code-scanning-report-tabs/>
    <code-scanning-report-filter/>
    <code-scanning-report-tools/>
    <code-scanning-report-issues/>
</template>

<style scoped>

</style>