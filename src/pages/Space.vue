<script setup>
import { SpaceCorrector, SpacesProvider } from 'spaces-vue3'
import { getMine } from "../services/spaces.js";

const props = defineProps({ solution: String, module: String, report: String })

</script>

<template>
    <spaces-provider #="{defaultSpace, changeable, specifiedSpace}" consumer="admin" :get-mine="getMine">
        <space-corrector default-route="代码报告:我的空间" v-bind="{defaultSpace, module, solution, specifiedSpace}">
            <router-view/>
        </space-corrector>
    </spaces-provider>
</template>

<style scoped>

</style>