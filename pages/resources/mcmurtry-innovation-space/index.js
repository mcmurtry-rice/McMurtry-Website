import { useEffect } from 'react';
import Router from 'next/router';

const McMurtryInnovationSpaceRedirect = () => {
    useEffect(() => { Router.replace('/resources/mcmakerspace'); }, []);
    return null;
};

export default McMurtryInnovationSpaceRedirect;
