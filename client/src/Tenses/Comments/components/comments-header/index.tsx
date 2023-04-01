import React from "react";
import { size } from "lodash";
import RuleIcon from '@mui/icons-material/Rule';
import { Tooltip } from "@mui/material";
import { Title } from "../../../../Сommon";
import { 
    StyledCommentsHeader,
    StyledCommentsCount,
    StyledCount,
    StyledRuleSection
} from "../../styled";

const CommentsHeader = ({ comments }: any) => {
    return (
        <StyledCommentsHeader>
        <StyledCommentsCount>
            <Title>Comments</Title>
            <StyledCount>{size(comments)} Comment</StyledCount>
        </StyledCommentsCount>

        <StyledRuleSection>
            <Tooltip title='Rules'>
                <RuleIcon style={{ marginRight: "15px" }} />
            </Tooltip>
        </StyledRuleSection>

    </StyledCommentsHeader>
    )
}

export default CommentsHeader;