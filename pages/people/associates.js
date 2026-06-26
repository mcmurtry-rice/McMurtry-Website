import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import Associates from '../../components/people/associates/associates';
import '../../components/general/page.css'

const AssociatesPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <Associates />
        <SiteFooter />
    </div>
)

export default AssociatesPage;
