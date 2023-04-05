import React from "react";
import { size } from "lodash";
import { useBoolean } from "../../../../Hooks";
import { Title } from "../../..";
import CommentRulesModal from "./rules-modal";
import { 
    StyledCommentsHeader,
    StyledCommentsCount,
    StyledCount,
    StyledRuleSection
} from "../../styled";
import { IComment } from "../../types";

const CommentsHeader = ({ comments }: { comments: Array<IComment> }) => {
    const [isRulesModalOpen, setIsRulesModalOpen] = useBoolean();
    return (
        <StyledCommentsHeader>
        <StyledCommentsCount>
            <Title>Comments</Title>
            <StyledCount>{size(comments)} Comment</StyledCount>
        </StyledCommentsCount>

        <StyledRuleSection>
            <CommentRulesModal open={isRulesModalOpen} setOpen={setIsRulesModalOpen}  />
        </StyledRuleSection>

    </StyledCommentsHeader>
    )
}

export default CommentsHeader;