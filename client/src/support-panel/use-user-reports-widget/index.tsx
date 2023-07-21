import { useQuery } from "@apollo/client"
import { GET_REPORTS } from "../graphql";
import { useMemo } from "react";
import ReportsGrid from "../datagrid";
import { REPORT_DATAGRIDS, REPORT_DATAGRID_COLUMNS } from "../constants";
import { IDataGridContoller } from "../types";
import { combineReports } from "../combine";

export const useReportsWidget = () => {
    const { data, loading, error } = useQuery(GET_REPORTS);

    const mergedApplicationReports = combineReports(data, "getApplicationReports.reports",['application', 'description']);
    const mergedCommentReports = combineReports(data, "getCommentReports.reports", ['comment']);
    const mergedUserReports = combineReports(data, "getUserReports.reports",['reason', 'additionalInformation']);


    const DATA_GRIDS: IDataGridContoller = {
        [REPORT_DATAGRIDS.APPLICATION_REPORTS]: <ReportsGrid reports={mergedApplicationReports} columns={REPORT_DATAGRID_COLUMNS.ApplcationReportColumns} />,
        [REPORT_DATAGRIDS.COMMENT_REPORTS]: <ReportsGrid reports={mergedCommentReports} columns={REPORT_DATAGRID_COLUMNS.CommentReportsColumns} />,
        [REPORT_DATAGRIDS.USER_REPORTS]: <ReportsGrid reports={mergedUserReports} columns={REPORT_DATAGRID_COLUMNS.UserReportsColumns} />
    };

    return {
        DATA_GRIDS,
        isLoading: loading,
        error
    }
}