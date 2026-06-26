import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import McMurtryAffinityGroups from '../../components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups';
import '../../components/general/page.css'

const McMurtryAffinityGroupsPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <McMurtryAffinityGroups />
        <SiteFooter />
    </div>
)

export default McMurtryAffinityGroupsPage;
