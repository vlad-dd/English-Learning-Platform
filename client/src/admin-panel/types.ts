
export interface IApplicationReportBlock {
    setIsOpen: (flag: boolean) => void
    application: string
    date: string
}

export interface ISubmitDownloadDialog extends Pick<IApplicationReportBlock, "setIsOpen"> {
    isOpen: boolean
}

export interface IPieCard {
    id: number
    title: string
    value: number | string
}
