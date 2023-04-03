import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Tooltip } from "@mui/material"
import { POLICY_RULES } from '../../../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/RuleSharp';
import Divider from '@mui/material/Divider';
import {
    StyledCommentRulesWrapper,
    StyledRuleIcon
} from '../../../styled';

const CommentRulesModal = ({ open, setOpen }: any) => {

    const closeRulesModal = () => {
        setOpen(false);
    };

    return (
        <StyledCommentRulesWrapper>
            <Tooltip title='Rules'>
                <StyledRuleIcon onClick={() => setOpen(true)} />
            </Tooltip>
            <Dialog
                onClose={closeRulesModal}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title">
                    English Learning Platform Policy 📜
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom color="gray">
                        As part of our policy, <strong style={{ color: "black" }}>we do not give permission</strong> for comments that include any of the following:
                    </Typography>
                    <List>
                        {POLICY_RULES.map((rule: any) => (
                            <>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ background: "rgb(0, 30, 60)" }}>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={rule} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))}
                    </List>
                    <Typography gutterBottom color="gray">
                        We take these rules seriously in order to maintain a safe and respectful community for all users. Comments that violate these rules may be removed, and repeat offenders may be banned from the platform. We encourage all users to review these rules and report any comments that violate them to our moderation team👩‍💻.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={closeRulesModal}>
                        Got it!
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledCommentRulesWrapper>
    );
}

export default CommentRulesModal;