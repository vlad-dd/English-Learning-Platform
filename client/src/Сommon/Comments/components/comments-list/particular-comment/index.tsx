import React, { useState } from "react";
import { Link, Tooltip } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useBoolean } from "../../../../../Hooks";
import ReportCommentModal from "../../report-modal";
import {
    StyledComment,
    StyledCommentContainer,
    StyledCommentReactions,
    StyledIconButton
} from "../../../styled";

const ParticularComment = ({ commentID, comment }: { commentID: string, comment: string }) => {
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
        <StyledCommentContainer data-testid="comments-container">
            <StyledComment dangerouslySetInnerHTML={{ __html: comment }} />
            <StyledCommentReactions>
                <StyledIconButton
                    onClick={likeComment}
                    aria-label="fingerprint"
                    color="secondary">
                    <ThumbUpIcon
                        style={{ height: "20px" }}
                        className={`${commentLike && !commentDislike ? 'liked-button' : ''}`}
                    />
                </StyledIconButton>
                <StyledIconButton
                    onClick={dislikeComment}
                    aria-label="fingerprint"
                    color="secondary">
                    <ThumbDownAltIcon
                        style={{ height: "20px" }}
                        className={`${commentDislike && !commentLike ? 'disliked-button' : ''}`}
                    />
                </StyledIconButton>
                <Tooltip
                    title='Report Comment'
                >
                    <Link
                        component="button"
                        variant="body2"
                        underline="hover"
                        onClick={() => {
                            setReportModalOpen(true)
                        }}
                    >
                        Report
                    </Link>
                </Tooltip>
            </StyledCommentReactions>
            <ReportCommentModal commentID={commentID} isOpen={isReportModalOpen} setOpen={setReportModalOpen} />
        </StyledCommentContainer>
    )
}

export default ParticularComment;