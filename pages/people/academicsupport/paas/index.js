import { useEffect } from 'react';
import Router from 'next/router';

// merged into the Academic Support page
const PaasRedirect = () => {
    useEffect(() => { Router.replace('/people/academicsupport#paas'); }, []);
    return null;
};

export default PaasRedirect;
