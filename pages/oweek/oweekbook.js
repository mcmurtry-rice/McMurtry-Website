import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import Page from '../../components/oweek/book/book';
import '../../components/general/page.css';

const OweekBook = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <SiteNavbar />
        <Page/>
        <SiteFooter />
    </div>
)

export default OweekBook;
