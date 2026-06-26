import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import Coronavirus from '../../components/resources/coronavirus/coronavirus';
import '../../components/general/page.css'

const CoronavirusPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <Coronavirus />
        <SiteFooter />
    </div>
)

export default CoronavirusPage;
