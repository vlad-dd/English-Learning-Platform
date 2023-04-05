import React, { ChangeEvent, useState } from "react";
import { size } from "lodash";
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { generateNicknameAvatars } from "../../../../utils";
import { EditorContainer, StyledButtonInnerHTML, StyledEditor, StyledEditorAvatar } from "../../styled";
import { ISendCommentEditor } from "../../types";

const SendCommentEditor= ({ addComment, isLoading }: ISendCommentEditor) => {
    const [html, setHtml] = useState('');
    const onChange = (e: ChangeEvent<any>) => setHtml(e.target.value);
    return (
        <StyledEditor>
          <StyledEditorAvatar {...generateNicknameAvatars('V S')} />
        <EditorContainer>
          <Editor value={html} onChange={onChange} />
          <LoadingButton
            style={{ position: "absolute", right: "1px", bottom: "1px" }}
            size="small"
            color="secondary"
            loading={isLoading}
            disabled={size(html) === 0}
            onClick={() => addComment(html)}
            loadingPosition="start"
            startIcon={<SendIcon />}
            variant="contained"
          >
            <StyledButtonInnerHTML>Send</StyledButtonInnerHTML>
          </LoadingButton>
        </EditorContainer>
      </StyledEditor>
    )
}

export default SendCommentEditor;