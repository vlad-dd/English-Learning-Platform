import React from "react";
import { HeaderWrapper, StyledTitle } from "../../styled";
import UserCount from "./user-count";
import { FormattedMessage } from "react-intl";
import { USER_COUNT_TITLE_CLASSNAME, USER_COUNT_TITLE_ID } from "../../constants";

const WelcomePageHeaderSection = () => {
    return (
        <HeaderWrapper>
            <StyledTitle className={USER_COUNT_TITLE_CLASSNAME}>
                <FormattedMessage id={USER_COUNT_TITLE_ID} />
            </StyledTitle>
            <UserCount />
        </HeaderWrapper>
    )
}

export default WelcomePageHeaderSection;