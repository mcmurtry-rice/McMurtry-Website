import { useEffect } from 'react';
import Router from 'next/router';

// merged into the Academic Support page
const DivisionalAdvisorsRedirect = () => {
    useEffect(() => { Router.replace('/people/academicsupport#advisors'); }, []);
    return null;
};

export default DivisionalAdvisorsRedirect;
