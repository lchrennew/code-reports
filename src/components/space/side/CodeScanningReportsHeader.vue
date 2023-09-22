<script setup>
import { computed } from "vue";

const props = defineProps({ value: String })
const emit = defineEmits([ 'update:value' ])

const innerValue = computed({
    get: () => props.value,
    set: value => emit('update:value', value)
})
</script>

<template>
    <div class="reports-header">
        <a-input v-model:value="innerValue"/>
    </div>
</template>

<style scoped lang="less">
.reports-header {
    padding: 1em;
    margin-left: -1em;
}
</style>