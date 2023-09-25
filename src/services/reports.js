export const getReports = async ({ solution, module }) => [
    {
        id: 'report-1',
        name: '扫描报告1'
    },
    {
        id: 'report-2',
        name: '扫描报告2'
    },
    {
        id: 'report-3',
        name: '扫描报告3'
    },
]

export const getCommitters = async ({ solution, module }) => [
    { name: 'admin' },
    { name: 'suntianjiao' },
]

export const getRules = async ({ solution, module }) => [
    { name: 'rule1' },
    { name: 'rule2' },
]