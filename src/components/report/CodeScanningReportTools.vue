<script setup>
import { inject } from "vue";

const status = inject('status')
</script>

<template>
    <div class="report-tools" v-if="status!=='resolved'">
        <a-space v-if="status==='open'">
            <a-button>忽略所选</a-button>
            <a-button>忽略全部</a-button>
        </a-space>
        <a-space v-else-if="status==='omitted'">
            <a-button>取消忽略所选</a-button>
            <a-button>取消忽略全部</a-button>
        </a-space>
    </div>
</template>

<style scoped lang="less">
.report-tools {
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>