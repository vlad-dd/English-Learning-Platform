import { Row } from "antd";
import SingleCards from "./single-cards";
import ListCard from "./list-card";
import { PLATFORM_CARDS_DATA_TEST_ID } from "../../constants";

const PlatformCards = () => {
    return (
        <Row data-testid={PLATFORM_CARDS_DATA_TEST_ID} gutter={16} style={{ paddingTop: "10px" }}>
            <SingleCards />
            <ListCard />
        </Row>
    )
}

export default PlatformCards;