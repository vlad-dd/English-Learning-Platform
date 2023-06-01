import React from "react";
import { size } from "lodash";
import { useBoolean } from "../../../../Hooks";
import { Title } from "../../..";
import CommentRulesModal from "./rules-modal";
import { IComment } from "../../types";
import {
    StyledCommentsHeader,
    StyledCommentsCount,
    StyledCount,
    StyledRuleSection
} from "../../styled";
import { FormattedMessage } from "react-intl";

const CommentsHeader = ({ comments }: { comments: Array<IComment> }) => {
    const [isRulesModalOpen, setIsRulesModalOpen] = useBoolean();
    return (
        <StyledCommentsHeader data-testid="comments-header">
            <StyledCommentsCount data-testid="comments-count">
                <Title>
                    <FormattedMessage id="tense_comments_title" />
                </Title>
                <StyledCount>{size(comments)} Comment</StyledCount>
            </StyledCommentsCount>

            <StyledRuleSection data-testid="comments-rule-section">
                <CommentRulesModal open={isRulesModalOpen} setOpen={setIsRulesModalOpen} />
            </StyledRuleSection>

        </StyledCommentsHeader>
    );
};

export default CommentsHeader;