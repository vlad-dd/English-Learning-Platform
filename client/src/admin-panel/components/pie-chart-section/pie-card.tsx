import { Card, CardContent, Typography } from "@mui/material"
import { Tag } from "antd";
import { Pie } from "react-chartjs-2"
import { FaUserPlus } from "react-icons/fa";
import { IPieCard } from "../../types";

const data = {
    labels: ['Registered', 'Visitors'],
    datasets: [
        {
            data: [1, 3],
            backgroundColor: ['#217f9e', '#a533d9', '#7261f7'],
        },
    ],

};

const PieCard = ({ id, title, value }: IPieCard) => {
    return (
        <Card key={id} sx={{ minWidth: 275 }} style={{ border: "1px solid white", display: "flex" }}>
            <CardContent>
                <Typography variant="body2">
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{ display: "flex", flexDirection: "column", rowGap: "15px" }}>
                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center", gap: "8px" }}>
                        <FaUserPlus />
                        <span>{value}</span>
                    </div>
                    <Tag color="green">Priority: Main</Tag>
                    <Tag color="purple">Progress: Ongoing</Tag>
                    <Tag color="red">Level: Low</Tag>
                </Typography>
            </CardContent>
            <CardContent>
                <Pie data={data} style={{ height: "150px", width: "150px", objectFit: "cover" }} />
            </CardContent>
        </Card>
    )
}

export default PieCard;