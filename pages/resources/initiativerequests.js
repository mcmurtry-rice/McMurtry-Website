import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import InitiativeRequests from '../../components/resources/initiativerequest/initiativerequest';
import '../../components/general/page.css'

const InitiativeRequestsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <InitiativeRequests />
        <SiteFooter />
    </div>
)

export default InitiativeRequestsPage;
