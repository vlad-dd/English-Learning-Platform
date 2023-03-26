import React from "react";
import { Col, Statistic } from "antd";
import { StyledRow } from "../styled";

const UserCount = () => {
    return (
        <StyledRow>
            <Col>
                <Statistic title="Active Users" value={1} />
            </Col>
        </StyledRow>
    )

}

export default UserCount;