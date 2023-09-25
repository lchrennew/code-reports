<script setup>
import DataLoader from "data-loader-vue3/src/DataLoader.vue";
import { computed, inject } from "vue";
import { getIssues } from "../../services/issues.js";
import CodeScanningIssueCodeLines from "./issue/CodeScanningIssueCodeLines.vue";


const solution = inject('solution')
const module = inject('module')
const report = inject('report')
const status = inject('status')
const level = inject('level')
const rules = inject('rules')
const committer = inject('committer')
const issueTimeFrom = inject('issueTimeFrom')
const issueTimeTo = inject('issueTimeTo')
const filename = inject('filename')
const page = inject('page')
const size = inject('size')

const hash = computed(() => [
    `${ solution.value }/${ module.value }/${ report.value }`,
    `${ status.value }/${ level.value }/${ rules.value }/${ committer.value }/${ issueTimeFrom.value }/${ issueTimeTo.value }/${ filename.value }`,
    `${ page }/${ size }`
].join('/'))

const args = computed(() => ({
    solution,
    module,
    report,
    status,
    level,
    rules,
    committer,
    issueTimeFrom,
    issueTimeTo,
    filename,
    page,
    size,
}))

</script>

<template>
    <div class="report-issues">
        <data-loader :load-data="getIssues" :load-data-args="args" :hash="hash" #="{loaded, data}">
            <a-table :loading="!loaded" :data-source="data">
                <a-table-column title="文件名" #="{record}">
                    {{ record.filename }}
                </a-table-column>
                <a-table-column title="规则" #="{record}">
                    <a :href="record.link" target="_blank">
                        {{ record.rule }}
                        <a-tag>{{ record.level }}</a-tag>
                    </a>
                </a-table-column>
                <a-table-column title="发现时间" #="{record}">
                    {{ record.issueTime }}
                </a-table-column>
                <a-table-column title="提交人" #="{record}">
                    {{ record.committer }}
                </a-table-column>
                <a-table-column title="提交时间" #="{record}">
                    {{ record.committedAt }}
                </a-table-column>
                <a-table-column title="操作" #="{record}">
                    <a-space>
                        <a href="#">忽略</a>
                    </a-space>
                </a-table-column>
                <template #expandedRowRender="{record}">
                    <code-scanning-issue-code-lines :lines="record.codes"/>
                </template>
            </a-table>
        </data-loader>
    </div>
</template>

<style scoped lang="less">
.report-issues {
    flex: 1;

}
</style>