import './oweek2026.css';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import OWeekGate from '../../../components/oweek2026/OWeekGate';
import LandingPage from './landing/LandingPage';

const OWeek20262027 = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />
        <OWeekGate>
            <LandingPage />
        </OWeekGate>
        <SiteFooter />
    </div>
);

export default OWeek20262027;
