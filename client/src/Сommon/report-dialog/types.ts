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
