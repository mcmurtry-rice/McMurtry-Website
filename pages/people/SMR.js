import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import SMR from '../../components/people/smr/smr';
import '../../components/general/page.css'

const SMRPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <SMR />
        <SiteFooter />
    </div>
)

export default SMRPage;
