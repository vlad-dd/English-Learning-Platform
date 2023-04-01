import React, { useState } from "react";
import { size } from "lodash";
import { Avatar } from "@mui/material";
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { generateNicknameAvatars } from "../../../../utils";
import { EditorContainer, StyledButtonInnerHTML, StyledEditor, StyledEditorAvatar } from "../../styled";

const SendCommentEditor= ({ addComment }: any) => {
    const [html, setHtml] = useState('');
    const onChange = (e: any) => setHtml(e.target.value)
    return (
        <StyledEditor>
          <StyledEditorAvatar {...generateNicknameAvatars('V S')} />
        <EditorContainer>
          <Editor value={html} onChange={onChange} />
          <LoadingButton
            style={{ position: "absolute", right: "1px", bottom: "1px" }}
            size="small"
            color="secondary"
            loading={false}
            disabled={size(html) === 0}
            onClick={addComment}
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