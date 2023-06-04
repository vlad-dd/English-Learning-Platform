import React from "react";
import { HeaderWrapper, StyledTitle } from "../../styled";
import UserCount from "./user-count";
import { FormattedMessage } from "react-intl";

const WelcomePageHeaderSection = () => {
    return (
        <HeaderWrapper>
            <StyledTitle className="elp-title">
                <FormattedMessage id="welcome_page_title" />
            </StyledTitle>
            <UserCount />
        </HeaderWrapper>
    )
}

export default WelcomePageHeaderSection;