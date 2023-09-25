<script>
import 'highlight.js/styles/vs.css'
import hljs from "highlight.js";

</script>
<script setup>
import { computed } from "vue";

const props = defineProps({ code: String })

const highlighted = computed(() => hljs.highlightAuto(props.code))
</script>

<template>
    <div class="code-line" v-html="highlighted.value"/>
</template>

<style scoped lang="less">

.code-line {
    flex: 1;
    padding: 0 1em;
}
</style>