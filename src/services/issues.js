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
            codes: '<span class="linenumber">12</span><span>import static com.tech.devps.pipoeline.infrastructure.util.Utils.*;</span>\n<span class="linenumber">13</span><span>import static com.tech.devps.pipoeline.infrastructure.util.Utils.*;</span>',
            comment: '使用lombok自动生成',
            filename: 'api/src/main/java/A.java',
            issueTime: '2022-06-14 17:51:19',
            key: 'sfasfdasds',
            line: 12,
            message: '私有非静态xxxxx',
            rule: 'PrivateMemberNoEntry',
            link: 'http://',
            level: 'high',
        },
        {
            committedAt: '2022-06-14 17:51:19',
            committer: 'admin',
            codes: '<span class="linenumber">12</span><span>import static com.tech.devps.pipoeline.infrastructure.util.Utils.*;</span>\n<span class="linenumber">13</span><span>import static com.tech.devps.pipoeline.infrastructure.util.Utils.*;</span>',
            comment: '使用lombok自动生成',
            filename: 'api/src/main/java/A.java',
            issueTime: '2022-06-14 17:51:19',
            key: 'sfasfdasd2',
            line: 13,
            message: '私有非静态xxxxx',
            rule: 'PrivateMemberNoEntry',
            link: 'http://',
            level: 'high',
        }
    ]