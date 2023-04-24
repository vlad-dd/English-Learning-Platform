import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaUserPlus } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'chart.js/auto';


import { Title } from "../Сommon";
import { Pie, Line } from "react-chartjs-2";
import { Tag } from "antd";
import { useState } from 'react';

const admin_dashboard_blocks = [
    { id: 1, title: 'Total users ', value: 4 },
    { id: 2, title: 'TBD ', value: 'TBD' },
    { id: 3, title: 'TBD ', value: 'TBD' },
];

const data = {
    labels: ['Registered', 'Visitors'],
    datasets: [
        {
            data: [1, 3],
            backgroundColor: ['#217f9e', '#a533d9', '#7261f7'],
        },
    ],

};

const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: 'Tenses',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#6EE99B',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Grammar-Levels',
            data: [28, 48, 30, 9, 86, 27],
            borderColor: '#28EBF3',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Dictionary',
            data: [50, 20, 70, 30, 40, 60],
            borderColor: '#A327FC',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Tests',
            data: [30, 10, 45, 20, 30, 50],
            borderColor: '#F84F98',
            borderWidth: 2,
            fill: false,
        },
    ],
};

const AdminPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <Title styles={{ fontSize: "2.5rem", margin: "20px" }}>Admin Control Dashboard</Title>
                <Button color="secondary" style={{ border: "1px solid purple", height: "40px", margin: "40px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <HiOutlineDownload size={18} />
                        Download Report
                    </div>
                </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", position: "relative", top: "20px", flexWrap: "wrap" }}>
                {
                    admin_dashboard_blocks.map(({ id, title, value }) => {
                        return (
                            <div key={id}>
                                <Card sx={{ minWidth: 275 }} style={{ border: "1px solid white", display: "flex" }}>
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
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ height: "50vh", margin: "50px", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <Line data={lineData} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Dialog
                        open={isOpen}
                        onClose={() => setIsOpen(prev => !prev)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Do you really want to download reports for Tenses?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setIsOpen(prev => !prev)}>Disagree</Button>
                            <Button onClick={() => setIsOpen(prev => !prev)} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <div style={{ border: "1px solid white", padding: "15px", display: "flex", justifyContent: "space-between", width: "25vw", marginBottom: "15px" }}>
                        <span>Tenses</span>
                        <span>23.04.2023</span>
                        <Button onClick={() => setIsOpen(true)} variant="outlined" style={{ height: "30px", display: "flex", gap: "10px" }}>
                            <HiOutlineDownload size={18} />
                            Download
                        </Button>
                    </div>

                    <div style={{ border: "1px solid white", padding: "15px", display: "flex", justifyContent: "space-between", width: "25vw", marginBottom: "15px" }}>
                        <span>Grammar</span>
                        <span>23.04.2023</span>
                        <Button variant="outlined" style={{ height: "30px", display: "flex", gap: "10px" }}>
                            <HiOutlineDownload size={18} />
                            Download
                        </Button>
                    </div>

                    <div style={{ border: "1px solid white", padding: "15px", display: "flex", justifyContent: "space-between", width: "25vw", marginBottom: "15px" }}>
                        <span>Dictionary</span>
                        <span>23.04.2023</span>
                        <Button variant="outlined" style={{ height: "30px", display: "flex", gap: "10px" }}>
                            <HiOutlineDownload size={18} />
                            Download
                        </Button>
                    </div>

                    <div style={{ border: "1px solid white", padding: "15px", display: "flex", justifyContent: "space-between", width: "25vw", marginBottom: "15px" }}>
                        <span>Tests</span>
                        <span>23.04.2023</span>
                        <Button variant="outlined" style={{ height: "30px", display: "flex", gap: "10px" }}>
                            <HiOutlineDownload size={18} />
                            Download
                        </Button>
                    </div>
                    <Button style={{ border: "1px solid purple", width: "100%", display: "flex", gap: "10px" }} color="secondary">
                        <HiOutlineDownload size={18} />
                        Get All Applications Reports
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default AdminPage;