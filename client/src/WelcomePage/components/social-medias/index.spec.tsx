import React from "react";
import { render, screen } from "@testing-library/react";
import SocialMedias from ".";
import { SOCIAL_MEDIAS } from "../../constants";

describe('StepsGuideline', () => {
    it('should render component', () => {
        render(<SocialMedias />);
        expect(screen.getByTestId("social-medias-section")).toBeInTheDocument();
        SOCIAL_MEDIAS.forEach(({ media}) => expect(screen.getByText(media)).toBeInTheDocument());
    });
})