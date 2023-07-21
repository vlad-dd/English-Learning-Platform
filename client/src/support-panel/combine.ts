import { extractByPath } from "../utils/utils";
import { ICurrentReport, IReports } from "./types";

const mergeReports = (reports: IReports[], fields: Array<string>) => {
    return reports?.reduce((prev: IReports[], { id, report }: ICurrentReport) => {
        const mergedReport: any = { id };
        fields.forEach((field) => {
            if (report[field]) {
                mergedReport[field] = report[field];
            }
        });
        return [...prev, mergedReport];
    }, []);
};

export const combineReports = (data: IReports[], extractPath: string, fields: string[]) => mergeReports(extractByPath(data, extractPath), fields);