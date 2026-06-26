import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import Page from '../../components/10/sponsor/sponsor';
import '../../components/general/page.css';

const Sponsor = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <SiteNavbar />
        <Page/>
    </div>
)

export default Sponsor;