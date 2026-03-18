import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // When changing route using Links, it scrolls up automatically
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
