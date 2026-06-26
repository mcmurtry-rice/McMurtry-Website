import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import Committees from '../../components/people/committees/committees';
import '../../components/general/page.css'

const CommitteesPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <Committees />
        <SiteFooter />
    </div>
)

export default CommitteesPage;
