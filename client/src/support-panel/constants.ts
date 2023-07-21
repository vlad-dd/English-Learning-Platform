export const SELECT_REPORT_OPTIONS = ['Application Reports', 'Comment Reports', 'User Reports'];

export const REPORT_DATAGRIDS = {
    APPLICATION_REPORTS: "Application Reports",
    COMMENT_REPORTS: "Comment Reports",
    USER_REPORTS: "User Reports"
};

export const REPORT_DATAGRID_COLUMNS = {
    ApplcationReportColumns: [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'application', headerName: 'Application', width: 150 },
        { field: 'description', headerName: 'Description', width: 450 },
    ],
    CommentReportsColumns: [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'comment', headerName: 'Comment', width: 150 },
    ],
    UserReportsColumns: [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'reason', headerName: 'Reason', width: 250 },
        { field: 'additionalInformation', headerName: 'AdditionalInformation', width: 250 },
    ]
};
