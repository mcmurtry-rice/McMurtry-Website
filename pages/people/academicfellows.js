import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import AcademicFellows from '../../components/people/fellows/fellows';
import '../../components/general/page.css'

const AcademicFellowsPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <AcademicFellows />
        <SiteFooter />
    </div>
)

export default AcademicFellowsPage;
