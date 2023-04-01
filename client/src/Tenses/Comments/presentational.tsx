import { Avatar, IconButton, Link, List, Tooltip } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { size } from "lodash";
import React, { useState } from "react";
import RuleIcon from '@mui/icons-material/Rule';
import { Title } from "../../Сommon";
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { StyledCommentsCount, StyledCommentsHeader, StyledCount, StyledRuleSection, StyledSectionCommentsWrapper } from "./styled";
import { generateNicknameAvatars, uid } from "../../utils";
import { Button, Tag } from "antd";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommentsHeader from "./components/comments-header";
import SendCommentEditor from "./components/send-comment";


const SectionComments = () => {
    const [comments, setComment] = useState([]);
    const [html, setHtml] = useState('');
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [open, setOpen] = React.useState(false);
    const onChange = (e: any) => setHtml(e.target.value)

    console.log(comments)

    const addComment = () => {
        const date = new Date();
        const datetime = date.getDate() + "/"
          + (date.getMonth() + 1) + "/"
          + date.getFullYear()
        //@ts-ignore
        setComment([...comments, { id: uid(5), date: datetime, comment: html }])
      }

      const handleClose = () => {
        setOpen(false);
      };

      const likeComment = () => {
        setDislike(false);
        setLike(true);
      }
    
      const dislikeComment = () => {
        setLike(false);
        setDislike(true);
      }

    return (
        <StyledSectionCommentsWrapper>
            <CommentsHeader comments={comments} />
            <SendCommentEditor addComment={addComment} />

          <List style={{ overflow: "scroll" }}>
            {!!comments && comments.map(({ id, date, comment }) => (
              <ListItem key={id} style={{ margin: "15px 0" }}>
                <ListItemAvatar>
                  <Avatar style={{ border: "1px solid purple", marginBottom: "18px" }} {...generateNicknameAvatars('V S')} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div style={{ display: "flex", height: "20px" }}>
                      <p style={{ fontWeight: 600 }} >Vlad Syrotiuk</p>
                      <Tag style={{ marginLeft: "10px" }} color="purple">{date}</Tag>
                    </div>}
                  secondary={
                    <div>
                      <div style={{ color: "#ffffff", marginTop: "10px", padding: "5px" }} dangerouslySetInnerHTML={{ __html: comment }} />
                      <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                        <IconButton
                          onClick={likeComment}
                          style={{ marginRight: "30px", fill: "green" }}
                          aria-label="fingerprint"
                          color="secondary">
                          <ThumbUpIcon
                            style={{ height: "20px" }}
                            className={`${like && !dislike ? 'liked-button' : ''}`}
                          />
                        </IconButton>
                        <IconButton
                          onClick={dislikeComment}
                          style={{ marginRight: "30px" }}
                          aria-label="fingerprint"
                          color="secondary">
                          <ThumbDownAltIcon
                            style={{ height: "20px" }}
                            className={`${dislike && !like ? 'disliked-button' : ''}`}
                          />
                        </IconButton>
                        <Tooltip
                          title='Report comment'
                        >
                          <Link
                            component="button"
                            variant="body2"
                            underline="hover"
                            onClick={() => {
                              setOpen(true)
                            }}
                          >
                            Report
                          </Link>
                        </Tooltip>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Subscribe</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              To subscribe to this website, please enter your email address here. We
                              will send updates occasionally.
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Email Address"
                              type="email"
                              fullWidth
                              variant="standard"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Subscribe</Button>
                          </DialogActions>
                        </Dialog>
                      </div>

                    </div>
                  }
                />
              </ListItem>
            ))}
          </List>

        </StyledSectionCommentsWrapper>
    )
}

export default SectionComments;