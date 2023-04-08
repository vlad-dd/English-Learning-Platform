import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomePageHeaderSection from ".";

const HEADER_CONTENT = ['English Learning Platform', 'Active Users'];

describe('WelcomePageHeaderSection', () => {
    it('should render component', () => {
        render(<WelcomePageHeaderSection />);
        HEADER_CONTENT.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
    });
})