import React from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import statement from '../../data/resources/blm.json';
import './blm.css';

const BlackLivesMatterPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='blm-page'>
            <Title title='McMurtry Believes Black Lives Matter' width={[400, 400]} />
            <Box className='blm-message' width={[0.9, 0.6]} ml='auto' mr='auto'>
                {statement.paragraphs.map((par) => (
                    <p key={par}>{par}</p>
                ))}
            </Box>
            <Box className='blm-subtitle'>
                <p>Getting Involved:</p>
            </Box>
            <Box className='blm-links' ml='auto' mr='auto' width={[0.9, 0.6]}>
                {statement.links.map((texturl) => (
                    <a href={texturl.url} key={texturl.text}>
                        <Box className='blm-link' width={[1]}>
                            <p>{texturl.text}</p>
                        </Box>
                    </a>
                ))}
            </Box>
        </div>
        <SiteFooter />
    </div>
);

export default BlackLivesMatterPage;
