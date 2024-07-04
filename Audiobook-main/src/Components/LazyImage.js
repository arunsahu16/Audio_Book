import React, { useState, useEffect } from 'react';
import GradientCircularProgress from './Loader/GradientCircularProgress';

export default function LazyImage({ src, alt, className = "img-fluid" }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoading(false);
    }, [src]);

    return (
        <div className={className}>
            {isLoading ? <GradientCircularProgress /> : <img src={src} alt={alt} className={className} />}
        </div>
    );
}
