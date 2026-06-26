import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import StriveLiaisons from '../../components/people/wellbeing/strive_liaisons';
import '../../components/general/page.css'

const StriveLiaisonsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <StriveLiaisons />
        <SiteFooter />
    </div>
)

export default StriveLiaisonsPage;
