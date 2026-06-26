import Header from "../../components/general/header";
import SiteNavbar from '../../components/general/siteNavbar';
import SiteFooter from '../../components/general/siteFooter';
import HeadCaregivers from "../../components/people/wellbeing/head_caregivers";
import "../../components/general/page.css";

const StriveLiaisonsPage = () => (
  <div className='page page-light page-with-staggered-menu'>
    <Header />
    <SiteNavbar />
    
    <HeadCaregivers />
    <SiteFooter />
  </div>
);

export default StriveLiaisonsPage;

