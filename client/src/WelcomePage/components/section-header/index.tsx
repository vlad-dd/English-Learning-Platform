import React from "react";
import { HeaderWrapper, StyledTitle } from "../../styled";
import UserCount from "./user-count";

const WelcomePageHeaderSection = () => {
    return (
        <HeaderWrapper>
            <StyledTitle>English Learning Platform</StyledTitle>
            <UserCount />
        </HeaderWrapper>
    )
}

export default WelcomePageHeaderSection;