import { useEffect } from 'react';
import Router from 'next/router';

// merged into the Academic Support page
const AcademicFellowsRedirect = () => {
    useEffect(() => { Router.replace('/people/academicsupport#fellows'); }, []);
    return null;
};

export default AcademicFellowsRedirect;
