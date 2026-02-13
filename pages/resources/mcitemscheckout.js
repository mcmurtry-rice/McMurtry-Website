import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import McItemsCheckout from '../../components/resources/mcitemscheckout/mcitemscheckout';
import '../../components/general/page.css'

const McItemsCheckoutPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <McItemsCheckout />
        <Footer />
    </div>
)

export default McItemsCheckoutPage;
