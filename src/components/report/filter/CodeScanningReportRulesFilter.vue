<script setup>
import { computed, inject } from "vue";
import DataLoader from "data-loader-vue3/src/DataLoader.vue";
import { getRules } from "../../../services/reports.js";

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
        :load-data="getRules"
        :load-data-args="{solution, module}"
        :hash="`${solution}/${module}`"
        #="{data, loaded}"
    >
        <a-select v-if="loaded" v-model:value="innerValue">
            <a-select-option value="">全部</a-select-option>
            <a-select-option v-for="rule in data" :value="rule.name">
                {{ rule.name }}
            </a-select-option>
        </a-select>
    </data-loader>
</template>

<style scoped lang="less">

</style>