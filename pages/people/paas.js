import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import Paas from '../../components/people/paas/paas';
import '../../components/general/page.css';

const PaasPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <Paas />
        <SiteFooter />
    </div>
)

export default PaasPage;
