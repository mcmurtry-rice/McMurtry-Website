import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import PCardManagement from '../../components/resources/pcardmanagement/pcardmanagement';
import '../../components/general/page.css'

const PCardManagementPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <PCardManagement />
        <Footer />
    </div>
)

export default PCardManagementPage;
