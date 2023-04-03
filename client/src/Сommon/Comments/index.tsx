import React, { useState } from "react";
import { uid } from "../../utils";
import CommentsHeader from "./components/comments-header";
import SendCommentEditor from "./components/send-comment";
import CommentsList from "./components/comments-list";
import { StyledSectionCommentsWrapper } from "./styled";

const SectionComments = () => {
    const [comments, setComment] = useState<any[]>([]);

    const addComment = (html: any) => {
        const date = new Date();
        const datetime = date.getDate() + "/"
          + (date.getMonth() + 1) + "/"
          + date.getFullYear()
        setComment([...comments, { id: uid(5), date: datetime, comment: html }])
      }

    return (
        <StyledSectionCommentsWrapper>
            <CommentsHeader comments={comments} />
            <SendCommentEditor addComment={addComment} />
            <CommentsList comments={comments} />
        </StyledSectionCommentsWrapper>
    )
}

export default SectionComments;