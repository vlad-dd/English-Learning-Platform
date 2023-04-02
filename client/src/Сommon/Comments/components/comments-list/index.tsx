import React, { useState } from "react";
import { Link, Tooltip } from "@mui/material";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { generateNicknameAvatars } from "../../../../utils";
import ReportIcon from '@mui/icons-material/Report';
import { ListItemTextBody, SendersNickname, StyledComment, StyledCommentAvatar, StyledCommentContainer, StyledCommentReactions, StyledDateTag, StyledIconButton, StyledList, StyledListItem } from "../../styled";
import ReportCommentModal from "../report-modal";

const CommentsList = ({ comments }: any) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const likeComment = () => {
        setDislike(false);
        setLike(true);
    }

    const dislikeComment = () => {
        setLike(false);
        setDislike(true);
    }
    return (
        <StyledList>
            {!!comments && comments.map(({ id, date, comment }: any) => (
                <StyledListItem key={id}>
                    <ListItemAvatar>
                        <StyledCommentAvatar {...generateNicknameAvatars('V S')} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <ListItemTextBody>
                                <SendersNickname>Vlad Syrotiuk</SendersNickname>
                                <StyledDateTag color="purple">{date}</StyledDateTag>
                            </ListItemTextBody>}
                        secondary={
                            <StyledCommentContainer>
                                <StyledComment dangerouslySetInnerHTML={{ __html: comment }} />
                                <StyledCommentReactions>
                                    <StyledIconButton
                                        onClick={likeComment}
                                        aria-label="fingerprint"
                                        color="secondary">
                                        <ThumbUpIcon
                                            style={{ height: "20px" }}
                                            className={`${like && !dislike ? 'liked-button' : ''}`}
                                        />
                                    </StyledIconButton>
                                    <StyledIconButton
                                        onClick={dislikeComment}
                                        aria-label="fingerprint"
                                        color="secondary">
                                        <ThumbDownAltIcon
                                            style={{ height: "20px" }}
                                            className={`${dislike && !like ? 'disliked-button' : ''}`}
                                        />
                                    </StyledIconButton>
                                    <Tooltip
                                        title='Report comment'
                                    >
                                        <Link
                                            component="button"
                                            variant="body2"
                                            underline="hover"
                                            onClick={() => {
                                                setOpen(true)
                                            }}
                                        >
                                            Report
                                        </Link>
                                    </Tooltip>
                                   
                                </StyledCommentReactions>
                                <ReportCommentModal commentID={id} isOpen={open} setOpen={setOpen} />

                            </StyledCommentContainer>
                        }
                    />
                </StyledListItem>
            ))}
        </StyledList>
    )
}

export default CommentsList;