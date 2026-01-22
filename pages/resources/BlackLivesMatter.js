import Header from "../../components/general/header";
import StaggeredMenu from "../../components/navbar/StaggeredMenu";
import Footer from "../../components/general/footer/footer";
import BlackLivesMatter from "../../components/resources/blm/blm";
import "../../components/general/page.css";

const BlackLivesMatterPage = () => (
  <div className='page page-with-staggered-menu'>
    <Header />
    <StaggeredMenu />
    
    <BlackLivesMatter />
    <Footer />
  </div>
);

export default BlackLivesMatterPage;

