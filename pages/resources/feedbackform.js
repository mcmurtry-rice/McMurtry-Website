import Header from "../../components/general/header";
import SiteFooter from '../../components/general/siteFooter';
import SiteNavbar from '../../components/general/siteNavbar';
import FeedbackForm from "../../components/resources/feedbackform/feedbackform";
import "../../components/general/page.css";

const FeedbackFormPage = () => (
  <div className='page page-with-staggered-menu'>
    <Header />
    <SiteNavbar />
    
    <FeedbackForm />
    <SiteFooter />
  </div>
);

export default FeedbackFormPage;