import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import CoordsPage from '../../../../components/oweek2026/CoordsPage';

const OWeek2026Coords = () => (
    <div className="page page-light groweek-page">
        <Header />
        <SiteNavbar />
        <CoordsPage />
        <SiteFooter />
    </div>
);

export default OWeek2026Coords;
