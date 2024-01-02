import { useState, useEffect } from 'react';

const useHeight = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const h = window.onscroll = () => window.scrollY;
        const handleResize = () => setHeight(h());

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return height;
};

export { useHeight };