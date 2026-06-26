import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import McMinistry from '../../components/people/mcministry/mcministry';
import '../../components/general/page.css'

const McMinistryPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <McMinistry />
        <SiteFooter />
    </div>
)

export default McMinistryPage;
