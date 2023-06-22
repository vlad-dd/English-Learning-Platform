import { size } from "lodash";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { generateNicknameAvatars } from "../../../../utils/utils";
import ParticularComment from "./particular-comment";
import { ICommentsList } from "../../types";
import { COMMENTS_LIST_DATA_TEST_ID, COMMENT_USER_STATUS } from "../../constants";
import {
    ListItemTextBody,
    SendersNickname,
    StyledCommentAvatar,
    StyledDateTag,
    StyledList,
    StyledListItem
} from "../../styled";

const CommentsList = ({ comments }: ICommentsList) => {
    return (
        <StyledList data-testid={COMMENTS_LIST_DATA_TEST_ID}>
            {!!size(comments) && [...comments].reverse().map(({ id, date, comment, email }) => (
                <StyledListItem key={id}>
                    <ListItemAvatar>
                        <StyledCommentAvatar {...generateNicknameAvatars('V S')} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <ListItemTextBody>
                                <SendersNickname>
                                    {email ?? COMMENT_USER_STATUS.VISITOR}
                                </SendersNickname>
                                <StyledDateTag color="purple">
                                    {date}
                                </StyledDateTag>
                            </ListItemTextBody>
                        }
                        secondary={<ParticularComment commentID={id} comment={comment} />}
                    />
                </StyledListItem>
            ))}
        </StyledList>
    )
}

export default CommentsList;