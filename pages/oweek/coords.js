import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import Page from '../../components/oweek/coords/coords';
import '../../components/general/page.css';

const Coords = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <SiteNavbar />
        <Page/>
        <SiteFooter />
    </div>
)

export default Coords;
