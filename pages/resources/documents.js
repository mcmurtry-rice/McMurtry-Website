import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import Documents from '../../components/resources/documents/documents';
import '../../components/general/page.css'

const DocumentsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <Documents />
        <SiteFooter />
    </div>
)

export default DocumentsPage;
