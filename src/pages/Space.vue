<script setup>
import { RawSpaceLoader, SpaceCorrector, SpacesProvider } from 'spaces-vue3'
import { getMine } from "../spaces.js";

const props = defineProps({ solution: String, module: String, job: String })

</script>

<template>
    <spaces-provider #="{defaultSpace, changeable, specifiedSpace}" consumer="admin" :get-mine="getMine">
        <space-corrector default-route="代码报告:我的空间" v-bind="{defaultSpace, module, solution, specifiedSpace}">
            <raw-space-loader #="{rawSolution, rawModule}" v-bind="{path, getRawSpace}">
                <router-view/>
            </raw-space-loader>
        </space-corrector>
    </spaces-provider>
</template>

<style scoped>

</style>