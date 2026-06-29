import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../WatercolorFilters';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../Sidebar';

const OWeek2026Book = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />
        <div className="groweek">
            <WatercolorFilters />
            <Sidebar />
            <ScrollToTop />
            <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '0%', left: '-10%' }} />
            <WatercolorBlotch color="#e8a4c8" size={350} style={{ top: '5%', right: '-8%' }} />
            <WatercolorBlotch color="#f0d86e" size={320} style={{ top: '40%', left: '-9%' }} />
            <WatercolorBlotch color="#c8e2f0" size={300} style={{ bottom: '10%', right: '-7%' }} />

            <section className="groweek-section" style={{ paddingTop: '2.5rem' }}>
                <h2 className="groweek-section-title">The O-Week Book</h2>
                <div className="groweek-mission" style={{ textAlign: 'center' }}>
                    <p style={{ textAlign: 'center' }}>Coming soon! The Let It GrO-Week Book will be available here before move-in.</p>
                </div>
            </section>
        </div>
        <SiteFooter />
    </div>
);

export default OWeek2026Book;
