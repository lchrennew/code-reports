<script setup>
import { computed, onMounted, ref } from "vue";
import CodeSannningIssueCodeLine from "./CodeSannningIssueCodeLine.vue";

const props = defineProps({ lines: String, issue: Object })
const el = ref()

const code = computed(() => {
    const lines = props.lines.split('\n')
    return lines.map(line => {
        const div = document.createElement('div')
        div.innerHTML = line

        const linenumber = Number(div.querySelector('.linenumber').innerText)
        const lineCode = div.querySelector('span:not(.linenumber)').innerText
        return {
            num: linenumber,
            code: lineCode,
        }
    })
})

const highlight = rawText => rawText
onMounted(() => el.value.querySelectorAll('span:not(.linenumber)').forEach(line => line.innerHTML = highlight(line.innerText)))
</script>

<template>
    <div ref="el" class="code">
        <div class="line" v-for="line in code" :class="{active: line.num === issue.line}">
            <div class="line-num">{{ line.num }}</div>
            <code-sannning-issue-code-line :code="line.code"/>
        </div>
    </div>
</template>

<style scoped lang="less">

.code {
    line-height: 20px;
    font-size: 12px;
    white-space: pre-wrap;
    background-color: #fff;
    margin: -16px;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;

    .line {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;

        &.active:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(255, 0, 0, 0.1);
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.04);
        }

        .line-num {
            text-align: right;
            width: 60px;
            padding-right: 1em;
            border-right: solid 1px rgba(0, 0, 0, 0.06);
        }

    }

}
</style>