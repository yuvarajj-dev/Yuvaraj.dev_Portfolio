import React, { Suspense, lazy, useEffect } from 'react';
import './Spline.css';

// Import the Spline component without lazy loading
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function ThreeD() {
    useEffect(() => {
        // Perform preloading when the component mounts
        const preloadSpline = async () => {
            await import('@splinetool/react-spline');
            // Component and its associated resources are preloaded
        };
        preloadSpline();
    }, []);

    return (
        <div className='spline'>
            <Suspense fallback={<div>Loading...</div>}>
                <Spline
                    scene="https://prod.spline.design/zPPfWLiP8NOkNkyj/scene.splinecode"
                    optimize={{
                        enableCompression: true, // Enable compression for faster loading
                        enableMinification: true // Enable minification for reduced file size
                    }}
                />
            </Suspense>
        </div>
    );
}
