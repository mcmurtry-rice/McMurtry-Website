import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import DiversityResources from '../../components/resources/diversityResources/diversityResources';
import '../../components/general/page.css'

const DiversityResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <DiversityResources />
        <SiteFooter />
    </div>
)

export default DiversityResourcesPage;
