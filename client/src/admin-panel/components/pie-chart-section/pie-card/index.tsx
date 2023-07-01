import { CardContent, Typography } from "@mui/material"
import { Tag } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { IPieCard } from "../../../types";
import { PIE_CHART_CONFIG } from "../../../constants";
import {
    StyledPie,
    StyledPieCard,
    StyledTotalUsersContainer,
    StyledTypography
} from "../styled";

const PieCard = ({ id, title, value }: IPieCard) => {
    return (
        <StyledPieCard
            key={id}
            sx={{ minWidth: 275 }}
        >
            <CardContent>
                <Typography variant="body2">
                    {title}
                </Typography>
                <StyledTypography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    <StyledTotalUsersContainer>
                        <FaUserPlus />
                        <span>{value}</span>
                    </StyledTotalUsersContainer>
                    <Tag color="green">Priority: Main</Tag>
                    <Tag color="purple">Progress: Ongoing</Tag>
                    <Tag color="red">Level: Low</Tag>
                </StyledTypography>
            </CardContent>
            <CardContent>
            <StyledPie data={PIE_CHART_CONFIG} />
            </CardContent>
        </StyledPieCard>
    )
}

export default PieCard;