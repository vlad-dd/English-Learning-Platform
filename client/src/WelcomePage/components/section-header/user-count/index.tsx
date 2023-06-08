import { Col, Statistic } from "antd";
import { StyledRow } from "../styled";
import { FormattedMessage } from "react-intl";
import { WELCOME_PAGE } from "../../../../translations/constants";

const UserCount = () => {
    return (
        <StyledRow>
            <Col>
                <Statistic title={<FormattedMessage id={WELCOME_PAGE.ACTIVE_USERS_COUNT} />} value={1} />
            </Col>
        </StyledRow>
    )

}

export default UserCount;