import { props } from "./route-props.js";
import Home from "../pages/Home.vue";
import Space from "../pages/Space.vue";
import Report from "../pages/Report.vue";

export default [
    {
        name: '首页',
        path: '/:path(.*)*',
        component: Home,
    },
    {
        name: '代码报告',
        path: '/code-reports/:solution/:module',
        redirect: to => ({ ...to, name: '代码报告:我的空间' }),
        props,
        component: Home,
        children: [
            {
                name: '代码报告:我的空间',
                path: '',
                props,
                component: Space,
                children: [
                    {
                        name: '代码报告:我的空间/报告详情',
                        path: ':job',
                        props,
                        component: Report,
                    }
                ]
            },
        ]
    }
]