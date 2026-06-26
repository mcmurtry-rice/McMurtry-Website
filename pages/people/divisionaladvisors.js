import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import DivisionalAdvisors from '../../components/people/divisionaladvisors/divisionaladvisors';
import '../../components/general/page.css'

const DivisionalAdvisorsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <DivisionalAdvisors />
        <SiteFooter />
    </div>
)

export default DivisionalAdvisorsPage;
