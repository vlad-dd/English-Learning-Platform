import React from "react";
import { Card, Col } from "antd";
import { CARDS_INFORMATION } from "../../../constants";

const SingleCards = () => {
    return (
        <>
            {CARDS_INFORMATION.map(({ id, title, description }) => (
                <Col key={id} span={8}>
                    <Card title={title} bordered={false}>
                        <p>{description}</p>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default SingleCards;