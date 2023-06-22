import { FormattedMessage } from 'react-intl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Tooltip } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/RuleSharp';
import Divider from '@mui/material/Divider';
import { TENSES_PAGE } from '../../../../../translations/constants';
import { ICommentRulesModal } from '../../../types';
import {
    COMMENT_RULES_WRAPPER_DATA_TEST_ID,
    COMMENT_RULE_TOOLTIP_TITLE,
    DIALOG_CONTENT_DATA_TEST_ID,
    DIALOG_DESCRIPTION_DATA_TEST_ID,
    DIALOG_LIST_DATA_TEST_ID,
    DIALOG_RULES_DATA_TEST_ID,
    DIALOG_SUBMIT_BUTTON_DATA_TEST_ID,
    DIALOG_TITLE_DATA_TEST_ID,
    DIALOG_TITLE_ID,
    POLICY_RULES,
    RULES_ICON_DATA_TEST_ID
} from '../../../constants';
import {
    StyledCommentRulesWrapper,
    StyledRuleIcon
} from '../../../styled';

const CommentRulesModal = ({ open, setOpen }: ICommentRulesModal) => {

    const closeRulesModal = () => {
        setOpen(false);
    };

    return (
        <StyledCommentRulesWrapper data-testid={COMMENT_RULES_WRAPPER_DATA_TEST_ID}>
            <Tooltip title={COMMENT_RULE_TOOLTIP_TITLE}>
                <StyledRuleIcon
                    data-testid={RULES_ICON_DATA_TEST_ID}
                    onClick={() => setOpen(true)} />
            </Tooltip>
            <Dialog
                data-testid={DIALOG_RULES_DATA_TEST_ID}
                onClose={closeRulesModal}
                open={open}
            >
                <DialogTitle
                    id={DIALOG_TITLE_ID}
                    data-testid={DIALOG_TITLE_DATA_TEST_ID}
                >
                    <FormattedMessage id={TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE} />
                </DialogTitle>
                <DialogContent dividers data-testid={DIALOG_CONTENT_DATA_TEST_ID}>
                    <Typography gutterBottom color="gray">
                        <FormattedMessage id={TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE} />
                    </Typography>
                    <List data-testid={DIALOG_LIST_DATA_TEST_ID}>
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
                    <Typography
                        data-testid={DIALOG_DESCRIPTION_DATA_TEST_ID}
                        gutterBottom
                        color="gray"
                    >
                        <FormattedMessage id={TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO} />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        data-testid={DIALOG_SUBMIT_BUTTON_DATA_TEST_ID}
                        autoFocus
                        onClick={closeRulesModal}>
                        <FormattedMessage id={TENSES_PAGE.COMMENTS_POLICY_RULES_SUBMIT_BUTTON} />
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledCommentRulesWrapper>
    );
}

export default CommentRulesModal;