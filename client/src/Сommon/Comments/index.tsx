import React from "react";
import CommentsHeader from "./components/comments-header";
import SendCommentEditor from "./components/send-comment";
import CommentsList from "./components/comments-list";
import useUpdate from "./use-comment-update";
import { ISectionComments } from "./types";
import { StyledSectionCommentsWrapper } from "./styled";

const SectionComments = ({ renderComments, refetch, path1, path2 }: ISectionComments) => {

  const { addComment, isLoading, error } = useUpdate(refetch, path1, path2);

  return (
    <StyledSectionCommentsWrapper>
      <CommentsHeader comments={renderComments} />
      <SendCommentEditor isLoading={isLoading} addComment={addComment} />
      {renderComments && !isLoading && !error && (
        <>
          <CommentsList comments={renderComments} />
        </>
      )}
    </StyledSectionCommentsWrapper>
  )
}

export default SectionComments;