import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import MIS from '../../components/resources/mis/mis';
import '../../components/general/page.css'

const MISPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <MIS />
        <SiteFooter />
    </div>
)

export default MISPage;
