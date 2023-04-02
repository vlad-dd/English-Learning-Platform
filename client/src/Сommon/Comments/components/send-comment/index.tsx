import React, { useState } from "react";
import { size } from "lodash";
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { generateNicknameAvatars } from "../../../../utils";
import { EditorContainer, StyledButtonInnerHTML, StyledEditor, StyledEditorAvatar } from "../../styled";
import { message } from "antd";

const SendCommentEditor= ({ addComment }: any) => {
    const [html, setHtml] = useState('');
    const [isSending, setIsSending] = useState(false);
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
            loading={isSending}
            disabled={size(html) === 0}
            onClick={() => {
              setIsSending(true);
              setTimeout(() => {
                addComment(html);
                setIsSending(false);
                (() => message.success('Comment has been added!'))();
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