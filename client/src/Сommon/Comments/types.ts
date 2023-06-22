import { ApolloError } from "@apollo/client"
export interface IComment {
    __typename: string
    id: string
    date: string
    comment: string
    email?: string | undefined
}
export interface ISectionComments {
    renderComments: Array<IComment>
    refetch: () => void
    collection: string
    document: string
}

export interface ICommentRulesModal {
    open: boolean
    setOpen: (flag: boolean) => void
}

export interface IReportCommentModal {
    isOpen: boolean
    setOpen: (flag: boolean) => void
    commentID: string
}

export interface IAdditionalInput {
    setAdditionalInformation: (value: string) => void
}

export interface IModalActions {
    selectedReason: string
    isLoading: boolean
    error: undefined | ApolloError
    createUserAppeal: () => void
    handleClose: () => void
}

export interface ISelectReportReason {
    selectedReason: string
    setSelectedReason: (value: string) => void
}

export interface ISendCommentEditor {
    addComment: (html: string) => void
    isLoading: boolean
};

export interface IParticularComment {
    commentID: string,
    comment: string
};

export interface ICommentsList {
    comments: Array<IComment>
};