<script setup>

import CodeScanningReportsHeader from "./side/CodeScanningReportsHeader.vue";
import CodeScanningReportsList from "./side/CodeScanningReportsList.vue";
import { getReports } from "../../services/reports.js";
import DataLoader from "data-loader-vue3/src/DataLoader.vue";
import { inject, ref } from "vue";

const solution = inject('solution')
const module = inject('module')

const keyword = ref('')
</script>

<template>
    <data-loader :load-data="getReports" :load-data-args="{solution, module}" :hash="`${solution}/${module}`"
                 #="{loaded, data}">
        <code-scanning-reports-header v-model:value="keyword"/>
        <code-scanning-reports-list v-if="loaded" v-bind="{data, keyword}"/>
    </data-loader>
</template>

<style scoped lang="less">
.reports-header {

}

.reports-list {
    flex: 1;
}
</style>