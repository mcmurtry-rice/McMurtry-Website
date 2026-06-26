import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import Court from '../../components/people/court/court';
import '../../components/general/page.css'

const CourtPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <Court />
        <SiteFooter />
    </div>
)

export default CourtPage;
