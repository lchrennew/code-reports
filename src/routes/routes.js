import { props } from "./route-props.js";
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
        props,
        component: Space,
        children: [
            {
                name: '代码报告:我的空间/报告详情',
                path: ':report',
                props,
                component: Report,
            },
        ]
    }
]