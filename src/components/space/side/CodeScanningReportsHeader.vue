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
    padding: 8px 8px 8px 0;
}
</style>