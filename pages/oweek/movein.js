import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import Page from '../../components/oweek/movein/move';
import '../../components/general/page.css';

const OweekMoveIn = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <SiteNavbar />
        <Page/>
    </div>
)

export default OweekMoveIn;
