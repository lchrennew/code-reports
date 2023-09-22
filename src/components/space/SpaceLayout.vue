<script setup>

import CodeScanningReports from "./CodeScanningReports.vue";
</script>

<template>
    <div class="space-layout">
        <div class="space-layout-side">
            <code-scanning-reports/>
        </div>
        <div class="space-layout-content">
            <router-view/>
        </div>
    </div>
</template>

<style scoped lang="less">
.space-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    background-color: #fff;


    &-side {
        width: 300px;
        border-right: solid 1px rgba(0, 0, 0, 0.06);
    }

    &-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>