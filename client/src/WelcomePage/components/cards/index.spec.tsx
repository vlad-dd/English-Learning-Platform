import { render, screen } from "@testing-library/react";
import PlatformCards from ".";
import { CARDS_INFORMATION_LIST, PLATFORM_CARDS_DATA_TEST_ID } from "../../constants";
import { withIntlProvider, withRouterProvider } from "../../../test-utils/hocs";

const PlatformCardsWithProvider = withRouterProvider(withIntlProvider(PlatformCards));

const WELCOME_PAGE_CARD_NODES = [
    "Our Goal 🎯",
    "Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.",
    "Always Up-to-Date 🔄",
    "Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.",
    "Platform Structure 🗂"
];

describe('StepsGuideline', () => {
    it('should render component', () => {
       render(<PlatformCardsWithProvider />);
       expect(screen.getByTestId(PLATFORM_CARDS_DATA_TEST_ID)).toBeInTheDocument();
       WELCOME_PAGE_CARD_NODES.map((node: string) => expect(screen.getByText(node)).toBeInTheDocument());
       CARDS_INFORMATION_LIST.map(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });
})