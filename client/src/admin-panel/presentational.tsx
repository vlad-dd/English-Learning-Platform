import 'chart.js/auto';
import { AdminPanelHeader, PieChartSection, LineChartSection } from './components';

const AdminPage = () => {
    return (
        <>
            <AdminPanelHeader />
            <PieChartSection />
            <LineChartSection />
        </>
    )
};

export default AdminPage;

