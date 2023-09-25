export const getIssues = async ({
                                    solution,
                                    module,
                                    report,
                                    level,
                                    rules,
                                    committer,
                                    issueTimeFrom,
                                    issueTimeTo,
                                    filename,
                                    page,
                                    size
                                }) =>
    [
        {
            committedAt: '2022-06-14 17:51:19',
            committer: 'admin',
            codes: '',
            comment: '使用lombok自动生成',
            filename: 'api/src/main/java/A.java',
            issueTime: '2022-06-14 17:51:19',
            key: 'sfasfdasds',
            line: 44,
            message: '私有非静态xxxxx',
            rule: 'PrivateMemberNoEntry',
            link: 'http://',
            level: 'high',
            rowNumber: 1,
        }
    ]