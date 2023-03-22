import React from "react";
import { Col, Statistic } from "antd";
import { StyledRow } from "../styled";

const UserCount = () => {
    return (
        <StyledRow>
            <Col>
                <Statistic title="Active Users" value={Math.round(Math.random() * 15) + 1} />
            </Col>
        </StyledRow>
    )

}

export default UserCount;