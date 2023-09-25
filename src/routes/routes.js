import Space from "../pages/Space.vue";
import Report from "../pages/Report.vue";

export default [
    {
        name: '首页',
        path: '/:path(.*)*',
        component: Space,
    },
    {
        name: '代码报告:我的空间',
        path: '/code-reports/:solution/:module',
        props: route => ({ solution: route.params.solution, module: route.params.module, report: route.params.report }),
        component: Space,
        children: [
            {
                name: '代码报告:我的空间/报告详情',
                path: ':report',
                props: route => ({ report: route.params.report, ...route.query, }),
                component: Report,
            },
        ]
    }
]