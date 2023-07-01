import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, Tooltip } from "@mui/material";
import { useBoolean } from "../../../../../Hooks";
import ReportCommentModal from "../../report-modal";
import { IParticularComment } from "../../../types";
import { TENSES_PAGE } from "../../../../../translations/constants";
import {
    COMMENTS_CONTAINER_DATA_TEST_ID,
    COMMENT_REACTIONS_STATE,
    REPORT_COMMENT_TOOLTIP_TITLE
} from "../../../constants";
import {
    StyledComment,
    StyledCommentContainer,
    StyledCommentReactions,
    StyledIconButton,
    StyledThumbDownAltIcon,
    StyledThumbUpIcon,
} from "../../../styled";

const ParticularComment = ({ commentID, comment }: IParticularComment) => {
    const [isReportModalOpen, setReportModalOpen] = useBoolean();
    const [commentLike, setCommentLike] = useState(false);
    const [commentDislike, setCommentDislike] = useState(false);

    const likeComment = () => {
        setCommentDislike(false);
        setCommentLike(true);
    }

    const dislikeComment = () => {
        setCommentLike(false);
        setCommentDislike(true);
    }
    return (
        <StyledCommentContainer data-testid={COMMENTS_CONTAINER_DATA_TEST_ID}>
            <StyledComment dangerouslySetInnerHTML={{ __html: comment }} />
            <StyledCommentReactions>
                <StyledIconButton
                    onClick={likeComment}
                    color="secondary"
                >
                    <StyledThumbUpIcon
                        className={`${commentLike && !commentDislike ? COMMENT_REACTIONS_STATE.LIKED_BUTTON : ''}`}
                    />
                </StyledIconButton>
                <StyledIconButton
                    onClick={dislikeComment}
                    color="secondary">
                    <StyledThumbDownAltIcon
                        className={`${commentDislike && !commentLike ? COMMENT_REACTIONS_STATE.DISLIKED_BUTTON : ''}`}
                    />
                </StyledIconButton>
                <Tooltip
                    title={REPORT_COMMENT_TOOLTIP_TITLE}
                >
                    <Link
                        component="button"
                        variant="body2"
                        underline="hover"
                        onClick={() => setReportModalOpen(true)}
                    >
                        <FormattedMessage id={TENSES_PAGE.REPORT_PARTICULAR_COMMENT_BUTTON} />
                    </Link>
                </Tooltip>
            </StyledCommentReactions>
            <ReportCommentModal commentID={commentID} isOpen={isReportModalOpen} setOpen={setReportModalOpen} />
        </StyledCommentContainer>
    )
}

export default ParticularComment;