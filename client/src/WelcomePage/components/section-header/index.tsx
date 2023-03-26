import React from "react";
import { HeaderWrapper, StyledTitle } from "../../styled";
import UserCount from "./user-count";

const WelcomePageHeaderSection = () => {
    return (
        <HeaderWrapper>
            <StyledTitle className="elp-title">English Learning Platform</StyledTitle>
            <UserCount />
        </HeaderWrapper>
    )
}

export default WelcomePageHeaderSection;