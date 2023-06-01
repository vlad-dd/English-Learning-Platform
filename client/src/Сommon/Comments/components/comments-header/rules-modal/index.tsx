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
import { ICommentRulesModal } from '../../../types';
import {
    StyledCommentRulesWrapper,
    StyledRuleIcon
} from '../../../styled';
import { FormattedMessage } from 'react-intl';

const CommentRulesModal = ({ open, setOpen }: ICommentRulesModal) => {

    const closeRulesModal = () => {
        setOpen(false);
    };

    return (
        <StyledCommentRulesWrapper data-testid="comment-rules-wrapper">
            <Tooltip title='Rules'>
                <StyledRuleIcon data-testid="rules-icon" onClick={() => setOpen(true)} />
            </Tooltip>
            <Dialog
                data-testid="dialog-rules"
                onClose={closeRulesModal}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" data-testid="dialog-title">
                    <FormattedMessage id="comments_policy_rules_title" />
                </DialogTitle>
                <DialogContent dividers data-testid="dialog-content">
                    <Typography gutterBottom color="gray">
                       <FormattedMessage id="comments_policy_rules_part_one" />
                    </Typography>
                    <List data-testid="dialog-list">
                        {POLICY_RULES.map((rule: string) => (
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
                    <Typography gutterBottom color="gray" data-testid="dialog-description">
                        <FormattedMessage id="comments_policy_rules_part_two" />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button 
                       data-testid="dialog-submit-button"
                       autoFocus 
                       onClick={closeRulesModal}>
                        Got it!
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledCommentRulesWrapper>
    );
}

export default CommentRulesModal;