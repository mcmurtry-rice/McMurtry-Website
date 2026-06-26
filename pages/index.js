import Header from '../components/general/header';
import Intro from '../components/splashpage/intropage';
import '../components/general/page.css';

/*
 * Home page — pixel-accurate Figma implementation (node 193:2).
 * The Figma design includes its own top navbar and footer; we do NOT
 * mount the project-wide <StaggeredMenu /> or <Footer /> here so the
 * page can render its own chrome end-to-end. Every other route still
 * uses StaggeredMenu + Footer.
 */
const Home = () => (
    <div className='page page-light'>
        <Header />
        <Intro />
    </div>
);

export default Home;