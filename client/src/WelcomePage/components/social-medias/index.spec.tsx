import { render, screen } from "@testing-library/react";
import SocialMedias from ".";
import { SOCIAL_MEDIAS, SOCIAL_MEDIAS_DATA_TEST_ID } from "../../constants";

describe('StepsGuideline', () => {
    it('should render component', () => {
        render(<SocialMedias />);
        expect(screen.getByTestId(SOCIAL_MEDIAS_DATA_TEST_ID)).toBeInTheDocument();
        SOCIAL_MEDIAS.forEach(({ media }) => expect(screen.getByText(media)).toBeInTheDocument());
    });
})