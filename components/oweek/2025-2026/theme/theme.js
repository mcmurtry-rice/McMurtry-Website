import { Box, Image } from 'rebass';
import '../oweek.css';
import { oweekTheme, oweekImage } from '../../../lib/oweek';

const Theme = () => (
    <div className='oweek-page'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>About the Theme</h1>
        </div>

        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
            <Image src={oweekImage(oweekTheme.heroImage)} alt='' width={350} className='float-left-img' style={{ float: 'left', marginRight: '30px', marginBottom: '20px' }} />
            {oweekTheme.paragraphs.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </Box>
    </div>
)

export default Theme;
