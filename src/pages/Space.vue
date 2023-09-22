<script setup>
import { SpaceCorrector, SpacesProvider } from 'spaces-vue3'
import { getMine } from "../services/spaces.js";
import SpaceLayout from "../components/space/SpaceLayout.vue";
import { computed, provide } from "vue";
import { getReports } from "../services/reports.js";
import ContextProvider from 'context-vue3/src/ContextProvider.vue'
import DataLoader from 'data-loader-vue3/src/DataLoader.vue'

const props = defineProps({ solution: String, module: String, report: String })

provide('solution', computed(() => props.solution))
provide('module', computed(() => props.module))
provide('report', computed(() => props.report))
</script>

<template>
    <spaces-provider #="{defaultSpace, changeable, specifiedSpace}" consumer="admin" :get-mine="getMine">
        <space-corrector default-route="代码报告:我的空间" v-bind="{defaultSpace, module, solution, specifiedSpace}">
            <data-loader :load-data="getReports" :load-data-args="{solution, module}" :hash="`${solution}/${module}`"
                         #="{loaded, data}">
                <context-provider name="reports" :context="data" v-if="loaded">
                    <space-layout/>
                </context-provider>
            </data-loader>
        </space-corrector>
    </spaces-provider>
</template>

<style scoped>

</style>