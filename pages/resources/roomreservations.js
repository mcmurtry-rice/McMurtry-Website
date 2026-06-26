import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import RoomReservations from '../../components/resources/roomreservations/roomreservations';
import '../../components/general/page.css';

const RoomReservationsPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <RoomReservations />
        <SiteFooter />
    </div>
);

export default RoomReservationsPage;