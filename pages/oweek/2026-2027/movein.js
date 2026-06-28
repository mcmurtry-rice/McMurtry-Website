import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../components/oweek/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../components/oweek/oweek2026/ScrollToTop';
import Sidebar from '../../../components/oweek/oweek2026/Sidebar';

const OWeek2026MoveIn = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />
        <div className="groweek">
            <WatercolorFilters />
            <Sidebar />
            <ScrollToTop />
            <WatercolorBlotch color="#e8985a" size={400} style={{ top: '0%', left: '-10%' }} />
            <WatercolorBlotch color="#c4aeda" size={350} style={{ top: '5%', right: '-8%' }} />
            <WatercolorBlotch color="#7db87a" size={320} style={{ top: '40%', left: '-9%' }} />
            <WatercolorBlotch color="#c8e2f0" size={300} style={{ bottom: '10%', right: '-7%' }} />

            <section className="groweek-section" style={{ paddingTop: '2.5rem' }}>
                <h2 className="groweek-section-title">Move-In Info</h2>
                <div className="groweek-mission" style={{ textAlign: 'center' }}>
                    <p style={{ textAlign: 'center' }}>Coming soon! Move-in details, packing lists, and logistics will be posted here.</p>
                </div>
            </section>
        </div>
        <SiteFooter />
    </div>
);

export default OWeek2026MoveIn;
