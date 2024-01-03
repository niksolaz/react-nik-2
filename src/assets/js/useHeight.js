import { useState, useEffect } from 'react';

const useHeight = (actualHeight) => {
    const [height, setHeight] = useState(actualHeight);

    useEffect(() => {
        const handleScroll = () => {
            // Calcola l'altezza in base alla posizione dello scroll
            // Qui puoi personalizzare la logica in base alle tue esigenze
            const newHeight = actualHeight + window.scrollY / 5;
            
            setHeight(newHeight);
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup dell'event listener alla smontaggio del componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return height;
};

export { useHeight };