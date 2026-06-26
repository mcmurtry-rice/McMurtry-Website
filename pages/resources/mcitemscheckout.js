import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import McItemsCheckout from '../../components/resources/mcitemscheckout/mcitemscheckout';
import '../../components/general/page.css'

const McItemsCheckoutPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <McItemsCheckout />
        <SiteFooter />
    </div>
)

export default McItemsCheckoutPage;
