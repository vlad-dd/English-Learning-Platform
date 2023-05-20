import { uid } from "../utils/utils";

export const DOWNLOAD_ALL_REPORTS_BUTTON_ID = "download-all-reports-button";
export const APPLICATION_REPORT_BLOCK_ID = "application-report-block";
export const LINE_CHART_SECTION = "line-chart-section";
export const PIE_CARD_ID = "pie-card-container";

const admin_dashboard_blocks = [
    { id: 1, title: 'Total users ', value: 4 },
    { id: 2, title: 'TBD ', value: 'TBD' },
    { id: 3, title: 'TBD ', value: 'TBD' },
];

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

const APPLICATION_REPORT_BLOCKS = [
    { id: uid(7), application: 'Tenses' , date: '23.04.2023' },
    { id: uid(7), application: 'Grammar' , date: '23.04.2023' },
    { id: uid(7), application: 'Dictionary' , date: '23.04.2023' },
    { id: uid(7), application: 'Tests' , date: '23.04.2023' },
]


export { 
    admin_dashboard_blocks,
    lineData,
    APPLICATION_REPORT_BLOCKS
 }