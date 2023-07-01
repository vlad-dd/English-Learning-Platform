import SingleCards from "./single-cards";
import ListCard from "./list-card";
import { PLATFORM_CARDS_DATA_TEST_ID } from "../../constants";
import { StyledRow } from "./styled";

const PlatformCards = () => {
    return (
        <StyledRow data-testid={PLATFORM_CARDS_DATA_TEST_ID} gutter={16}>
            <SingleCards />
            <ListCard />
        </StyledRow>
    )
}

export default PlatformCards;