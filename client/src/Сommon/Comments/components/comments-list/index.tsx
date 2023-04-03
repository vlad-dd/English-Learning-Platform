import React from "react";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { generateNicknameAvatars } from "../../../../utils";
import ParticularComment from "./particular-comment";
import { 
    ListItemTextBody, 
    SendersNickname, 
    StyledCommentAvatar, 
    StyledDateTag, 
    StyledList, 
    StyledListItem 
} from "../../styled";

const CommentsList = ({ comments }: any) => {
    return (
        <StyledList>
            {!!comments && comments.reverse().map(({ id, date, comment }: any) => (
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