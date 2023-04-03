import React, { useState } from "react";
import { size } from "lodash";
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { generateNicknameAvatars, successMessage } from "../../../../utils";
import { EditorContainer, StyledButtonInnerHTML, StyledEditor, StyledEditorAvatar } from "../../styled";
import { useBoolean } from "../../../../Hooks";

const SendCommentEditor= ({ addComment }: any) => {
    const [html, setHtml] = useState('');
    const [isCommentSending, setIsCommentSending] = useBoolean();
    const onChange = (e: any) => setHtml(e.target.value);
    return (
        <StyledEditor>
          <StyledEditorAvatar {...generateNicknameAvatars('V S')} />
        <EditorContainer>
          <Editor value={html} onChange={onChange} />
          <LoadingButton
            style={{ position: "absolute", right: "1px", bottom: "1px" }}
            size="small"
            color="secondary"
            loading={isCommentSending}
            disabled={size(html) === 0}
            onClick={() => {
              setIsCommentSending(true);
              setTimeout(() => {
                addComment(html);
                setIsCommentSending(false);
                successMessage('Comment has been added!');
              }, 1500)
            }}
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