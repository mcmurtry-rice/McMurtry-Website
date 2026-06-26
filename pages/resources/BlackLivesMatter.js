import Header from "../../components/general/header";
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import BlackLivesMatter from "../../components/resources/blm/blm";
import "../../components/general/page.css";

const BlackLivesMatterPage = () => (
  <div className='page page-with-staggered-menu'>
    <Header />
    <SiteNavbar />
    
    <BlackLivesMatter />
    <SiteFooter />
  </div>
);

export default BlackLivesMatterPage;

