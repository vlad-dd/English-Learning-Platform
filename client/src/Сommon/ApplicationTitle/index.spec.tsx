import { render, screen } from "@testing-library/react";
import ApplicationTitle from ".";

describe('Application Title', () => {
    const title = "English Learning Platform";

    it('should render component with a passed jsx element children', () => {
        render(<ApplicationTitle><span>{title}</span></ApplicationTitle>);
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('should render component with a passed string children', () => {
        render(<ApplicationTitle>{title}</ApplicationTitle>);
        expect(screen.getByText(title)).toBeInTheDocument();
    })
})