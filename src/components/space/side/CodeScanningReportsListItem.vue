<script setup>
import { computed, inject } from "vue";
import { useRouter } from "vue-router";
import { LinkOutlined } from "@ant-design/icons-vue";

const props = defineProps({ reportInfo: Object })

const report = inject('report')

const active = computed(() => report.value === props.reportInfo.id)

const router = useRouter()
const onClick = () => router.push({ name: '代码报告:我的空间/报告详情', params: { report: props.reportInfo.id } })

</script>

<template>
    <div class="report-info" :class="{active}" @click="onClick">
        <router-link :to="{ name: '代码报告:我的空间/报告详情', params: { report: reportInfo.id } }">
            {{ reportInfo.name }}
        </router-link>
        <a-space>
            <a-tooltip title="查看原始报告">
                <a href="#">
                    <link-outlined/>
                </a>
            </a-tooltip>
        </a-space>
    </div>
</template>

<style scoped lang="less">
.report-info {
    padding: 16px 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;

    &:hover, &.active {
        background-color: rgba(0, 0, 0, 0.06);
    }
}
</style>