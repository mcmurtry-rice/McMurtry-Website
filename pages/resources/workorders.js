import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import WorkOrders from '../../components/resources/workorder/workorder';
import '../../components/general/page.css'

const WorkOrdersPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <WorkOrders />
        <SiteFooter />
    </div>
)

export default WorkOrdersPage;
