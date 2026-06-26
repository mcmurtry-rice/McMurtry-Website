import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import RHAs from '../../components/people/wellbeing/resident_health_advisors';
import '../../components/general/page.css'

const RHAsPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <RHAs />
        <SiteFooter />
    </div>
)

export default RHAsPage;
