import { GridColDef } from "@mui/x-data-grid"
import { Dispatch, SetStateAction } from "react"

export interface IReports {
    id: string
    report: {
        [key:string]: string
    }
};

export interface IColumns {
    [key:string]: string | number
};

export interface IDataGrid {
    reports: IReports[]
    columns: GridColDef[]
};

export interface IReportGridSelector {
    selectReportOption: Dispatch<SetStateAction<string>>
    options: Array<string>
};

export interface IDataGridContoller {
    [key: string]: JSX.Element
}

export interface ICurrentReport { 
    id: string, 
    report: { [key: string]: string }
}