import React from "react";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { generateNicknameAvatars } from "../../../../utils/utils";
import ParticularComment from "./particular-comment";
import { IComment } from "../../types";
import { 
    ListItemTextBody, 
    SendersNickname, 
    StyledCommentAvatar, 
    StyledDateTag, 
    StyledList, 
    StyledListItem 
} from "../../styled";

const CommentsList = ({ comments }: { comments: Array<IComment> }) => {
    return (
        <StyledList data-testid="comments-list">
            {!!comments && [...comments].reverse().map(({ id, date, comment }: IComment) => (
                <StyledListItem key={id}>
                    <ListItemAvatar>
                        <StyledCommentAvatar {...generateNicknameAvatars('V S')} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <ListItemTextBody>
                                <SendersNickname>Vlad Syrotiuk</SendersNickname>
                                <StyledDateTag color="purple">{date}</StyledDateTag>
                            </ListItemTextBody>}
                        secondary={<ParticularComment commentID={id} comment={comment} />}
                    />
                </StyledListItem>
            ))}
        </StyledList>
    )
}

export default CommentsList;