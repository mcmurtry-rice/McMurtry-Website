import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import Events from '../../components/events/events/events';
import '../../components/general/page.css'

const CalendarPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <Events />
        <SiteFooter />
    </div>
)

export default CalendarPage;



