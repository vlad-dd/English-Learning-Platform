import React from "react";
import { Col, Statistic } from "antd";
import { StyledRow } from "../styled";
import { FormattedMessage } from "react-intl";

const UserCount = () => {
    return (
        <StyledRow>
            <Col>
                <Statistic title={<FormattedMessage id="active_users_count" />} value={1} />
            </Col>
        </StyledRow>
    )

}

export default UserCount;