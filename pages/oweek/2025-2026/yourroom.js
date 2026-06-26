import Header from '../../../components../../../components/Header/Header';
import SiteNavbar from '../../../components../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import Page from '../../../components/oweek/2025-2026/room/room';

const OweekRoom = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <SiteNavbar />
        <Page/>
        <SiteFooter />
    </div>
)

export default OweekRoom;
