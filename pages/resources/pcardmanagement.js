import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import PCardManagement from '../../components/resources/pcardmanagement/pcardmanagement';
import '../../components/general/page.css'

const PCardManagementPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <PCardManagement />
        <SiteFooter />
    </div>
)

export default PCardManagementPage;
