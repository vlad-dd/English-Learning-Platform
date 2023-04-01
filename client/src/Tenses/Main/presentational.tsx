import React, { SyntheticEvent, useCallback, useState } from "react";
import { AlertOutlined } from "@ant-design/icons";
import RuleIcon from '@mui/icons-material/Rule';
import { TenseContext } from "../Context";
import { useConfiguration } from "../../Hooks";
import { ApplicationTitle, BreadcrumbPath, Title } from "../../Сommon";
import { ContentSection, StyledAlert } from "../styled";
import TensesTable from "../Table/tenses-table";
import TensePractice from "../Carousel/presentational";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";
import { Avatar, Button, Link, Tooltip } from "@mui/material";
import { generateNicknameAvatars, uid } from "../../utils";
import SendIcon from '@mui/icons-material/Send';
import Editor from 'react-simple-wysiwyg';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Tag } from "antd";
import { size } from "lodash";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SectionComments from "../Comments/presentational";

const TenseContent = (): JSX.Element | null => {
  const { renderApplicationGate, extractValueByPath, isLoading, error } = useConfiguration(TenseContext);
  const configuration = extractValueByPath('countOfTenses[0]');
  const [html, setHtml] = useState('');
  const [comments, setComment] = useState([]);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const [open, setOpen] = React.useState(false);

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

  console.log('html: ', html)
  console.log('Render')

  return (
    <>
      <BreadcrumbPath />
      {renderApplicationGate() && (
        <ContentSection>
          <ApplicationTitle>{configuration.tense}</ApplicationTitle>
          <StyledAlert icon={<AlertOutlined />} message={configuration.tableData.tip} showIcon />
          <TensesTable table={configuration.tableData.table} />
          <MostCommonCases tense={configuration.tense} cases={configuration.cases} />
          <TenseExamplePanels examples={configuration.examples} />
          <TensePractice />
          <SectionComments />

          {/* <List style={{ overflow: "scroll" }}>
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
          </List> */}
        </ContentSection>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>We have some troubles with request...</div>}
    </>
  );
};

export default TenseContent;
