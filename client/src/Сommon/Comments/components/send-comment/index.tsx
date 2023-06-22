import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { size } from "lodash";
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { generateNicknameAvatars } from "../../../../utils/utils";
import { ISendCommentEditor } from "../../types";
import { ADD_COMMENT_BUTTON_DATA_TEST_ID, RICH_TEXT_EDITOR_DATA_TEST_ID } from "../../constants";
import { TENSES_PAGE } from "../../../../translations/constants";
import { EditorContainer, StyledButtonInnerHTML, StyledEditor, StyledEditorAvatar } from "../../styled";

const SendCommentEditor = ({ addComment, isLoading }: ISendCommentEditor) => {
  const [html, setHtml] = useState('');

  return (
    <StyledEditor data-testid={RICH_TEXT_EDITOR_DATA_TEST_ID}>
      <StyledEditorAvatar {...generateNicknameAvatars('V S')} />
      <EditorContainer>
        <Editor
          value={html}
          onChange={({ target: { value } }) => setHtml(value)}
        />
        <LoadingButton
          data-testid={ADD_COMMENT_BUTTON_DATA_TEST_ID}
          style={{ position: "absolute", right: "1px", bottom: "1px" }}
          size="small"
          color="secondary"
          loading={isLoading}
          disabled={!size(html)}
          onClick={() => addComment(html)}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="contained"
        >
          <StyledButtonInnerHTML>
            <FormattedMessage id={TENSES_PAGE.ADD_COMMENT_BUTTON} />
          </StyledButtonInnerHTML>
        </LoadingButton>
      </EditorContainer>
    </StyledEditor>
  )
}

export default SendCommentEditor;