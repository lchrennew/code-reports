<script setup>

import { computed, inject, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";


const level = inject('level')
const rules = inject('rules')
const committer = inject('committer')
const issueTimeFrom = inject('issueTimeFrom')
const issueTimeTo = inject('issueTimeTo')
const filename = inject('filename')

const modelRef = ref({
    level: level.value,
    rules: rules.value,
    committer: committer.value,
    issueTimeFrom: issueTimeFrom.value,
    issueTimeTo: issueTimeTo.value,
    filename: filename.value,
})

watchEffect(() =>
    modelRef.value = {
        level: level.value,
        rules: rules.value,
        committer: committer.value,
        issueTimeFrom: issueTimeFrom.value,
        issueTimeTo: issueTimeTo.value,
        filename: filename.value,
    })

const issueTime = computed({
    get: () => [ modelRef.value.issueTimeFrom, modelRef.value.issueTimeTo ],
    set: ([ from, to ]) => {
        modelRef.value.issueTimeFrom = from;
        modelRef.value.issueTimeTo = to;
    }
})

const route = useRoute()
const router = useRouter()
const onFinish = () =>
    router.push({ query: { ...route.query, ...modelRef.value } })
</script>

<template>
    <div class="report-filter">
        <a-form
            ref="formRef"
            :model="modelRef"
            name="search-form"
            @finish="onFinish"
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
                        <a-select v-model:value="modelRef.committer">
                            <a-select-option value="">全部</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item
                        name="issueTime"
                        label="发现时间"
                    >
                        <a-range-picker v-model:value="issueTime"/>
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
                    <a-button type="primary" html-type="submit">查询</a-button>
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