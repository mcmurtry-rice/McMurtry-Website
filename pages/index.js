import { useEffect } from 'react';
import Router from 'next/router';

const Index = () => {
    useEffect(() => { Router.replace('/home/index'); }, []);
    return null;
};

export default Index;
