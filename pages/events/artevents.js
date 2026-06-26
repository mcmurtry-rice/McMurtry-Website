import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import ArtEvents from '../../components/events/artevents/artevents';
import '../../components/general/page.css'

const EventsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <ArtEvents />
        <SiteFooter />
    </div>
)

export default EventsPage;
