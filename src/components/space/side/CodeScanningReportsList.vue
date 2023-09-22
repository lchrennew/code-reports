<script setup>
import ScrollPanel from 'scroll-bars-vue3/src/ScrollPanel.vue'
import CodeScanningReportsListItem from "./CodeScanningReportsListItem.vue";
import { computed } from "vue";

const props = defineProps({
    data: Array,
    keyword: String,
})

const visibleReports = computed(() => props.data.filter(report => report.name.includes(props.keyword)))
</script>

<template>
    <scroll-panel prevent scroll-y class="reports-list">
        <div class="reports-list-items">
            <code-scanning-reports-list-item v-for="reportInfo in visibleReports" v-bind="{reportInfo}"/>
        </div>
    </scroll-panel>
</template>

<style scoped lang="less">
.reports-list-items {
    display: flex;
    flex-direction: column;
    padding-right: 8px;
}
</style>