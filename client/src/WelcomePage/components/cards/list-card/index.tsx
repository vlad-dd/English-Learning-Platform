import { Link } from "react-router-dom";
import { Card, Col, List, Tag } from "antd";
import { GoLinkExternal } from "react-icons/go";
import { StyledListElement, StyledSpace } from "../styled";
import { CARDS_INFORMATION_LIST } from "../../../constants";
import { FormattedMessage } from "react-intl";
import { WELCOME_PAGE } from "../../../../translations/constants";

const ListCard = () => {
    return (
        <Col span={8}>
            <Card bordered title={<FormattedMessage id={WELCOME_PAGE.CARD_STRUCTURE_TITLE} />}
            >
                <List
                    size="small">
                    <StyledSpace
                        size={[0, 8]}
                        wrap
                    >
                        {CARDS_INFORMATION_LIST.map(({ id, title, link, color="blue" }) => (
                            <StyledListElement key={id}>
                                <Tag color={color}>{title}</Tag>
                                <Link to={link}>
                                    <GoLinkExternal />
                                </Link>
                            </StyledListElement>
                        ))}
                    </StyledSpace>
                </List>
            </Card>
        </Col>
    )
}

export default ListCard;