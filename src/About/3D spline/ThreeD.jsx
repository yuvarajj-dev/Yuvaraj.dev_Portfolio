import React, { Suspense, useEffect } from 'react';
import './Spline.css';

// Import the Spline component without lazy loading
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function ThreeD() {
    return (
        <div className='spline hidden lg:block '>
            <Suspense fallback={<div>Loading...</div>}>
                <Spline
                    scene="https://prod.spline.design/zPPfWLiP8NOkNkyj/scene.splinecode"
                />
            </Suspense>
        </div>
    );
}
