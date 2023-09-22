<script setup>

</script>

<template>
    <div class="report-tabs">
        <a-tabs :tab-bar-style="{paddingLeft: '1em'}">
            <a-tab-pane key="open" tab="待修复"/>
            <a-tab-pane key="resolved" tab="已修复"/>
            <a-tab-pane key="omitted" tab="已忽略"/>
        </a-tabs>
    </div>
</template>

<style scoped>

</style>