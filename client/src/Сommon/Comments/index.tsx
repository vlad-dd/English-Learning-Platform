import { size } from "lodash";
import CommentsHeader from "./components/comments-header";
import SendCommentEditor from "./components/send-comment";
import CommentsList from "./components/comments-list";
import useCommentUpdatingWidget from "./use-comment-update-widget";
import { ISectionComments } from "./types";
import { COMMENT_SECTION_DATA_TEST_ID } from "./constants";
import { StyledSectionCommentsWrapper } from "./styled";

const SectionComments = ({ renderComments, refetch, collection, document }: ISectionComments) => {

  const { addComment, isLoading, error } = useCommentUpdatingWidget(refetch, collection, document);

  return (
    <StyledSectionCommentsWrapper data-testid={COMMENT_SECTION_DATA_TEST_ID}>
      <CommentsHeader comments={renderComments} />
      <SendCommentEditor isLoading={isLoading} addComment={addComment} />
      {!!size(renderComments) && !isLoading && !error && <CommentsList comments={renderComments} />}
    </StyledSectionCommentsWrapper>
  )
}

export default SectionComments;