import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import OWeekGate from '../../../../components/oweek2026/OWeekGate';

const OWeek2026Letter = () => (
    <div className="page page-light groweek-page">
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

                <section className="groweek-section groweek-letter-pending">
                    <div className="groweek-letter-pending-icon" aria-hidden="true">
                        <i className="ph ph-envelope-simple-open" />
                    </div>
                    <h1 className="groweek-section-title">Letter to Parents</h1>
                    <p className="groweek-letter-pending-body">
                        We're still writing this one — a note from the McTeam for parents and
                        families will land here as move-in gets closer.
                    </p>
                    <p className="groweek-letter-pending-contact">
                        Questions in the meantime? Reach us at{' '}
                        <a href="mailto:mcmurtryoweek@gmail.com">mcmurtryoweek@gmail.com</a>.
                    </p>
                </section>
            </div>
        </OWeekGate>
        <SiteFooter />
    </div>
);

export default OWeek2026Letter;
