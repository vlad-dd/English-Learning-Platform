import React from "react";
import { size } from "lodash";
import CommentsHeader from "./components/comments-header";
import SendCommentEditor from "./components/send-comment";
import CommentsList from "./components/comments-list";
import useCommentUpdatingWidget from "./use-comment-update-widget";
import { ISectionComments } from "./types";
import { StyledSectionCommentsWrapper } from "./styled";

const SectionComments = ({ renderComments, refetch, path1, path2 }: ISectionComments) => {

  const { addComment, isLoading, error } = useCommentUpdatingWidget(refetch, path1, path2);

  return (
    <StyledSectionCommentsWrapper data-testid="comment-section">
      <CommentsHeader comments={renderComments} />
      <SendCommentEditor isLoading={isLoading} addComment={addComment} />
      {!!size(renderComments) && !isLoading && !error && <CommentsList comments={renderComments} />}
    </StyledSectionCommentsWrapper>
  )
}

export default SectionComments;