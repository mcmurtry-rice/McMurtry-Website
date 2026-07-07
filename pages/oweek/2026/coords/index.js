import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import OWeekGate from '../../../../components/oweek2026/OWeekGate';
import CoordsPage from '../../../../components/oweek2026/CoordsPage';

const OWeek2026Coords = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />
        <OWeekGate>
            <CoordsPage />
        </OWeekGate>
        <SiteFooter />
    </div>
);

export default OWeek2026Coords;
