import { CardContent, Typography } from "@mui/material"
import { Tag } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { IPieCard } from "../../../types";
import { PIE_CHART_CONFIG } from "../../../constants";
import {
    StyledPieCard,
    StyledTotalUsersContainer,
    StyledTypography
} from "../styled";
import { Pie } from "react-chartjs-2";

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
            <Pie data={PIE_CHART_CONFIG} style={{ height: "150px", width: "150px", objectFit: "cover" }} />
            </CardContent>
        </StyledPieCard>
    )
}

export default PieCard;