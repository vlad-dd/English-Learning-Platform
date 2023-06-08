import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomePageHeaderSection from ".";
import { withIntlProvider } from "../../../test-utils/hocs";

const HEADER_CONTENT = ['English Learning Platform', 'Active Users'];

const WelcomePageHeaderSectionWithProvider = withIntlProvider(WelcomePageHeaderSection);

describe('WelcomePageHeaderSection', () => {
    it('should render component', () => {
        render(<WelcomePageHeaderSectionWithProvider />);
        HEADER_CONTENT.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
    });
});