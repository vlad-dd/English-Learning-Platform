import React from "react";
import CommentsHeader from "./components/comments-header";
import SendCommentEditor from "./components/send-comment";
import CommentsList from "./components/comments-list";
import useUpdate from "./use-comment-update";
import { StyledSectionCommentsWrapper } from "./styled";

interface ISectionComments {
  renderComments: any
  refetch: () => void
  path1: string
  path2: string
}

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