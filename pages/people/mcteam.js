import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import McTeam from '../../components/people/mcteam/mcteam';
import '../../components/general/page.css'

const McTeamPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <McTeam />
        <SiteFooter />
    </div>
)

export default McTeamPage;