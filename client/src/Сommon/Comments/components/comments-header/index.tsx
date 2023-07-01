import { FormattedMessage } from "react-intl";
import { size } from "lodash";
import { useBoolean } from "../../../../Hooks";
import { Title } from "../../..";
import { TENSES_PAGE } from "../../../../translations/constants";
import CommentRulesModal from "./rules-modal";
import { IComment } from "../../types";
import {
    COMMENTS_COUNT_DATA_TEST_ID,
    COMMENTS_HEADER_DATA_TEST_ID,
    COMMENT_RULE_SECTION_DATA_TEST_ID
} from "../../constants";
import {
    StyledCommentsHeader,
    StyledCommentsCount,
    StyledCount,
    StyledRuleSection
} from "../../styled";

const CommentsHeader = ({ comments }: { comments: Array<IComment> }) => {
    const [isRulesModalOpen, setIsRulesModalOpen] = useBoolean();
    return (
        <StyledCommentsHeader data-testid={COMMENTS_HEADER_DATA_TEST_ID}>
            <StyledCommentsCount data-testid={COMMENTS_COUNT_DATA_TEST_ID}>
                <Title>
                    <FormattedMessage id={TENSES_PAGE.СOMMENTS_TITLE} />
                </Title>
                <StyledCount>
                    {size(comments)} <FormattedMessage id={TENSES_PAGE.COMMENTS_COUNT_TITLE} />
                </StyledCount>
            </StyledCommentsCount>

            <StyledRuleSection data-testid={COMMENT_RULE_SECTION_DATA_TEST_ID}>
                <CommentRulesModal open={isRulesModalOpen} setOpen={setIsRulesModalOpen} />
            </StyledRuleSection>
        </StyledCommentsHeader>
    );
};

export default CommentsHeader;