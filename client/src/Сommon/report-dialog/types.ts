import { ReactNode } from "react"
import { ApolloError } from "@apollo/client"
export interface IReportDialog {
    isOpen: boolean
    title: string | ReactNode
    description: string | ReactNode
    handleClose: () => void
    createReportAppeal: (reason: string, additionalInformation: string) => void
    isLoading: boolean
    error: undefined | ApolloError
};

export interface IAdditionalInput {
    setAdditionalInformation: (text: string) => void
};
export interface IDialogActions {
    selectedReason: string
    additionalInformation: string
    isLoading: boolean
    error: ApolloError | undefined
    handleClose: () => void
    createReportAppeal: (reason: string, additionalInformation: string) => any
};

export interface ISelectReportReason {
    selectedReason: string, 
    setSelectedReason: (text: string) => void
};