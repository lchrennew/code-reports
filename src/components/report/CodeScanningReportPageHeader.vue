<script setup>
import { inject } from "vue";

const reportInfo = inject('reportInfo')
</script>

<template>
    <a-page-header :title="reportInfo.name"/>
</template>

<style scoped lang="less">

</style>