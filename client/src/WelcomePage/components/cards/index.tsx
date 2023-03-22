import React from "react";
import { Row } from "antd";
import SingleCards from "./single-cards";
import ListCard from "./list-card";

const PlatformCards = () => {
    return (
        <Row gutter={16} style={{ paddingTop: "10px" }}>
            <SingleCards />
            <ListCard />
        </Row>
    )
}

export default PlatformCards;