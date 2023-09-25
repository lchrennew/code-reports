<script setup>
import { computed, inject } from "vue";
import DataLoader from "data-loader-vue3/src/DataLoader.vue";
import { getCommitters } from "../../../services/reports.js";

const props = defineProps({ value: String })
const emit = defineEmits([ 'update:value' ])

const innerValue = computed({
    get: () => props.value,
    set: value => emit('update:value', value)
})

const solution = inject('solution')
const module = inject('module')
</script>

<template>
    <data-loader
        :load-data="getCommitters"
        :load-data-args="{solution, module}"
        :hash="`${solution}/${module}`" #="{data, loaded}">
        <a-select v-if="loaded" v-model:value="innerValue">
            <a-select-option value="">全部</a-select-option>
            <a-select-option v-for="committer in data" :value="committer.name">{{ committer.name }}</a-select-option>
        </a-select>
    </data-loader>
</template>

<style scoped lang="less">

</style>