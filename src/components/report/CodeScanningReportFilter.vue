<script setup>

import { ref } from "vue";

const modelRef = ref({})

</script>

<template>
    <div class="report-filter">
        <a-form
            ref="formRef"
            :model="modelRef"
            name="search-form"

        >
            <a-row :gutter="24">
                <a-col :span="6">
                    <a-form-item
                        name="level"
                        label="缺陷等级"
                    >
                        <a-select v-model:value="modelRef.level">
                            <a-select-option value="">全部</a-select-option>
                            <a-select-option value="high">高危</a-select-option>
                            <a-select-option value="middle">中危</a-select-option>
                            <a-select-option value="low">低危</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item
                        name="rules"
                        label="扫描规则"
                    >
                        <a-select v-model:value="modelRef.rules">
                            <a-select-option value="">全部</a-select-option>

                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item
                        name="commiter"
                        label="提交人"
                    >
                        <a-select v-model:value="modelRef.commiter">
                            <a-select-option value="">全部</a-select-option>

                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item
                        name="issueTime"
                        label="发现时间"
                    >
                        <a-range-picker v-model:value="modelRef.issueTime"/>
                    </a-form-item>
                </a-col>
                <a-col :span="18">
                    <a-form-item
                        name="filename"
                        label="文件名称"
                    >
                        <a-input v-model:value="modelRef.filename"/>
                    </a-form-item>
                </a-col>
                <a-col :span="6" style="text-align: right">
                    <a-button type="primary">查询</a-button>
                </a-col>

            </a-row>
        </a-form>
    </div>

</template>

<style scoped lang="less">
.report-filter {
    padding-left: 1em;
}
</style>