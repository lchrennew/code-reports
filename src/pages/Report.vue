<script setup>
import CodeScanningReportTabs from "../components/report/CodeScanningReportTabs.vue";
import CodeScanningReportFilter from "../components/report/CodeScanningReportFilter.vue";
import CodeScanningReportTools from "../components/report/CodeScanningReportTools.vue";
import CodeScanningReportIssues from "../components/report/CodeScanningReportIssues.vue";
import { computed, inject, provide } from "vue";
import CodeScanningReportPageHeader from "../components/report/CodeScanningReportPageHeader.vue";
import dayjs from "dayjs";

const props = defineProps({
    report: String,
    status: { type: String, default: 'open' },
    level: { type: String, default: '' },
    rules: { type: String, default: '' },
    committer: { type: String, default: '' },
    issueTimeFrom: String,
    issueTimeTo: String,
    filename: String,
})

const reports = inject('reports')
const reportInfo = computed(() => reports.value.find(r => r.id === props.report))

provide('reportInfo', reportInfo)
provide('status', computed(() => props.status))
provide('level', computed(() => props.level))
provide('rules', computed(() => props.rules))
provide('committer', computed(() => props.committer))
provide('issueTimeFrom', computed(() => props.issueTimeFrom ? dayjs(props.issueTimeFrom) : null))
provide('issueTimeTo', computed(() => props.issueTimeTo ? dayjs(props.issueTimeTo) : null))
provide('filename', computed(() => props.filename))

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