import React from 'react';
import { Box } from 'rebass';
import './Title.css';

const Title = props => (
    <div>
        <Box width={props.width} ml='auto' mr='auto' className='title-container'>
            <h1 className='title-theme'>{props.title}</h1>
        </Box>
    </div>
)

export default Title;