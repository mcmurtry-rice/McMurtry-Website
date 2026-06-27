import { Box, Image } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { oweekCoordinators, oweekImage } from '../../../lib/oweek';
import './oweek.css';

const CoordsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='oweek-page'>
            <div className='oweek-hero'>
                <h1 className='oweek-main-title'>Meet the Coords</h1>
            </div>
            <div className='oweek-bios'>
                {oweekCoordinators.map(({ name, pronouns, year, major, from, image, linkedin }) => (
                    <Box width={[1, 0.28]} className='oweek-bio' key={name}>
                        <Box width={0.9} ml='auto' mr='auto'>
                            {linkedin ? (
                                <a href={linkedin} target='_blank' rel='noopener noreferrer'>
                                    <Image src={oweekImage(image)} alt='Error Loading Image' style={{ cursor: 'pointer' }} />
                                </a>
                            ) : (
                                <Image src={oweekImage(image)} alt='Error Loading Image' />
                            )}
                        </Box>
                        <p className='oweek-bio-name'>{name}</p>
                        <p>{pronouns}</p>
                        <p>{year}</p>
                        <p>{major}</p>
                        <p>{from}</p>
                    </Box>
                ))}
            </div>
            {oweekCoordinators.map(({ name, image, bio, bioImageAlign }, idx) => {
                const isLeft = bioImageAlign !== 'right';
                const imgClass = isLeft ? 'float-left-img' : 'float-right-img';
                const imgStyle = isLeft
                    ? { float: 'left', marginRight: '30px', marginBottom: '20px' }
                    : { float: 'right', marginLeft: '30px', marginBottom: '20px' };
                return (
                    <Box key={name} className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto'
                        mb={idx === oweekCoordinators.length - 1 ? [20, 50] : [10, 10]}
                        mt={idx === 0 ? [0, 0] : [20, 50]}>
                        <h2 className='section-title'>{name}</h2>
                        <Image src={oweekImage(image)} alt='' width={350} className={imgClass} style={imgStyle} />
                        {bio.map((line, i) => <p key={i}>{line}</p>)}
                    </Box>
                );
            })}
        </div>
        <SiteFooter />
    </div>
);

export default CoordsPage;
