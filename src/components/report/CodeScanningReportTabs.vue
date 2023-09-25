<script setup>
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router";

const status = inject('status')

const route = useRoute()
const router = useRouter()
const onChange = activeKey => router.push({ query: { ...route.query, status: activeKey } })
</script>

<template>
    <div class="report-tabs">
        <a-tabs :active-key="status" :tab-bar-style="{paddingLeft: '1em'}" @change="onChange">
            <a-tab-pane key="open" tab="待修复"/>
            <a-tab-pane key="resolved" tab="已修复"/>
            <a-tab-pane key="omitted" tab="已忽略"/>
        </a-tabs>
    </div>
</template>

<style scoped>

</style>