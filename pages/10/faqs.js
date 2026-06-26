import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import Page from '../../components/10/faqs/faqs';
import '../../components/general/page.css';

const FAQS = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <SiteNavbar />
        <Page/>
    </div>
)

export default FAQS;