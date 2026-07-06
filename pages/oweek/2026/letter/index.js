import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import OWeekGate from '../../../../components/oweek2026/OWeekGate';

const OWeek2026Letter = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />
        <OWeekGate>
            <div className="groweek">
                <WatercolorFilters />
                <Sidebar />
                <ScrollToTop />
                <WatercolorBlotch color="#e8a4c8" size={400} style={{ top: '0%', right: '-10%' }} />
                <WatercolorBlotch color="#c4aeda" size={350} style={{ top: '5%', left: '-8%' }} />
                <WatercolorBlotch color="#f0d86e" size={320} style={{ top: '40%', right: '-9%' }} />
                <WatercolorBlotch color="#7db87a" size={300} style={{ bottom: '10%', left: '-7%' }} />

                <section className="groweek-section" style={{ paddingTop: '2.5rem' }}>
                    <h2 className="groweek-section-title">Letter to Parents</h2>
                    <div className="groweek-mission" style={{ textAlign: 'center' }}>
                        <p style={{ textAlign: 'center' }}>Coming soon! A letter for parents and families will be posted here.</p>
                    </div>
                </section>
            </div>
        </OWeekGate>
        <SiteFooter />
    </div>
);

export default OWeek2026Letter;
