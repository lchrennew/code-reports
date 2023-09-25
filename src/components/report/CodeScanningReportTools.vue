<script setup>

</script>

<template>
    <div class="report-tools">
        <a-space>
            <a-button>全选</a-button>
            <a-button>取消选择</a-button>
            <a-button>反选</a-button>
        </a-space>

        <a-space>
            <a-button>忽略所选</a-button>
            <a-button>忽略全部</a-button>
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