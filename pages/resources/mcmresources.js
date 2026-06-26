import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import McmResources from '../../components/resources/mcmurtryresources/mcmresources';
import '../../components/general/page.css'

const McmResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <McmResources />
        <SiteFooter />
    </div>
)

export default McmResourcesPage;
