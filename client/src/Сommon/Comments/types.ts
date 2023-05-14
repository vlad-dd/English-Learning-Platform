import { ApolloError } from "@apollo/client"

interface IComment {
    __typename: string
    id: string
    date: string
    comment: string
    email: string | undefined
}
interface ISectionComments {
    renderComments: Array<IComment>
    refetch: () => void
    collection: string
    document: string
}

interface ICommentRulesModal {
    open: boolean
    setOpen: (flag: boolean) => void
}

interface IReportCommentModal {
    isOpen: boolean
    setOpen: (flag: boolean) => void
    commentID: string
}

interface IAdditionalInput {
    setAdditionalInformation: (value: string) => void 
}

interface IModalActions {
    selectedReason: string
    isLoading: boolean
    error: undefined | ApolloError
    createUserAppeal: () => void
    handleClose: () => void
}

interface ISelectReportReason {
    selectedReason: string
    setSelectedReason: (value: string) => void
}

interface ISendCommentEditor {
    addComment: (html: string) => void
    isLoading: boolean
}

export type {
    ISectionComments,
    IComment,
    ICommentRulesModal,
    IReportCommentModal,
    IAdditionalInput,
    IModalActions,
    ISelectReportReason,
    ISendCommentEditor,
}