import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, List, Space, Tag } from "antd";
import { GoLinkExternal } from "react-icons/go";
import { StyledListElement } from "../styled";
import { CARDS_INFORMATION_LIST } from "../../../constants";
import { FormattedMessage } from "react-intl";

const ListCard = () => {
    return (
        <Col span={8}>
            <Card title={<FormattedMessage id="platform_structure_title" />} bordered
            >
                <List
                    size="small">
                    <Space size={[0, 8]} wrap style={{ display: "flex", flexDirection: "row"}}>
                        {CARDS_INFORMATION_LIST.map(({ id, title, link, color = "blue" }) => (
                            <StyledListElement key={id}>
                                <Tag color={color}>{title}</Tag>
                                <Link to={link}>
                                    <GoLinkExternal />
                                </Link>
                            </StyledListElement>
                        ))}
                    </Space>
                </List>
            </Card>
        </Col>
    )
}

export default ListCard;