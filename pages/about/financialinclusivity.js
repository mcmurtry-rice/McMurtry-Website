import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import FinancialInclusivty from '../../components/about/financial_inclusivity/financial_Inclusivity';
import '../../components/general/page.css'

const FinancialInclusivtyPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <FinancialInclusivty />
        <SiteFooter />
    </div>
)

export default FinancialInclusivtyPage;