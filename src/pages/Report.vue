<script setup>
import CodeScanningReportTabs from "../components/report/CodeScanningReportTabs.vue";
import CodeScanningReportFilter from "../components/report/CodeScanningReportFilter.vue";
import CodeScanningReportTools from "../components/report/CodeScanningReportTools.vue";
import CodeScanningReportIssues from "../components/report/CodeScanningReportIssues.vue";
import { computed, inject, provide } from "vue";
import CodeScanningReportPageHeader from "../components/report/CodeScanningReportPageHeader.vue";

const props = defineProps({ solution: String, module: String, report: String })

const reports = inject('reports')
const reportInfo = computed(() => reports.value.find(r => r.id === props.report))
provide('reportInfo', reportInfo)
</script>

<template>
    <code-scanning-report-page-header/>
    <code-scanning-report-tabs/>
    <code-scanning-report-filter/>
    <code-scanning-report-tools/>
    <code-scanning-report-issues/>
</template>

<style scoped>

</style>