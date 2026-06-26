import React from 'react';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import './mcmresources.css';

const McmResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='mcm-resources-page'>
            <Title width={280} title='McMurtry Resources' />
            <div className='wide-mcm-resources-pdf'>
                <embed src='../../../../static/mcmurtry_resources.pdf' type='application/pdf' width='600' height='820px' scrollbar='1' toolbar='1' />
            </div>
            <div className='narrow-mcm-resources-pdf'>
                <embed src='../../../../static/mcmurtry_resources.pdf' type='application/pdf' width='360' height='820px' scrollbar='1' toolbar='1' />
            </div>
        </div>
        <SiteFooter />
    </div>
);

export default McmResourcesPage;
