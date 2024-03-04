import React from 'react'
import { useRef } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'
import "./Anime.css";

const AppContainer = styled('div', {
    width: '200px',
    height: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 957px)': {
        width: '60px',
    },
    '@media (max-width: 648px)': {
        width: '70px',
    },
})

const Container = styled('div', {
    display: 'flex',
})

const Box = styled('div', {
    position: 'relative',
    height: '50px',
    width: '200px',
    '@media (max-width: 957px)': {
        width: '200px',
    },
    '@media (max-width: 648px)': {
        width: '250px',
        position: "unset"
    },

})

const SharedStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 800,
    fontSize: '30px',
    backfaceVisibility: 'hidden',
    borderRadius: '50px',
    '@media (max-width: 1024px)': {
        marginTop: '4px',
        fontSize: '20px',
        height: "85%",
        width: "80%",
    },
    '@media (max-width: 964px)': {
        marginLeft: '50px',
        fontSize: '20px',
    },
    '@media (max-width: 648px)': {
        width: '150px',
        height: "70%",
        fontSize: '15px',
        marginTop: '8px',
        marginLeft: '0px',
    },
}

const FrontBox = styled(animated.div, {
    ...SharedStyles,
    fontSize: '20px',
    backgroundColor: '#fff',
})

const BackBox = styled(animated.div, {
    ...SharedStyles,
    backgroundColor: '#fff',
    color: 'black',
    fontSize:"20px",
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
})

const items = ["Yuvaraj.dev"]
export default function () {
    const [trail, api] = useTrail(items.length, () => ({
        rotateX: 0,
    }))
    const fliped = useRef(false);
    const handleclick = () => {
        if (fliped.current) {
            api.start({
                rotateX: 0,
            })
            fliped.current = false;
        } else {
            api.start({
                rotateX: 180,
            })
            fliped.current = true;
        }
    }

    return (
        <AppContainer>
            <Container onClick={handleclick}>
                {trail.map(({ rotateX }, i) => (
                    <Box key={i}>
                        <FrontBox
                            key={items[i]}
                            style={{
                                transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                                transformStyle: 'preserve-3d',
                            }}>
                            <div className="svgdiv">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 100 100"
                                    xmlSpace="preserve"
                                    className='svgfile'
                                >
                                    {/* Your SVG path data and other attributes go here */}
                                    <path d="M 87.762 7.716 c 0.364 -1.84 -0.02 -3.651 -1.081 -5.1 c -2.18 -2.975 -6.554 -3.488 -9.752 -1.147 L 46.036 24.092 l 0.15 -7.928 c 0.035 -1.808 -0.652 -3.481 -1.935 -4.712 c -1.329 -1.275 -3.109 -1.915 -5.032 -1.798 c -3.826 0.231 -6.997 3.461 -7.069 7.199 L 31.599 45.93 c -0.117 5.206 1.397 10.112 4.379 14.184 c 4.567 6.236 11.806 9.487 19.373 9.487 c 5.594 -0.001 11.367 -1.778 16.368 -5.44 l 12.964 -9.494 c 1.531 -1.121 2.571 -2.734 2.93 -4.543 c 0.364 -1.84 -0.02 -3.651 -1.081 -5.1 c -1.078 -1.472 -2.695 -2.34 -4.441 -2.559 l 0.234 -0.171 c 3.198 -2.341 4.028 -6.667 1.85 -9.643 c -1.284 -1.753 -3.331 -2.644 -5.45 -2.608 c 1.343 -2.307 1.353 -5.174 -0.228 -7.334 c -1.078 -1.473 -2.695 -2.34 -4.44 -2.56 l 10.775 -7.891 C 86.363 11.138 87.403 9.525 87.762 7.716 z" />
                                </svg>
                            </div>
                            {`Welcome  `}
                        </FrontBox>
                        <BackBox className={'BackBox'}
                            style={{
                                transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                                transformStyle: 'preserve-3d',
                            }}>
                            {items[i]}
                        </BackBox>
                    </Box>
                ))}
            </Container>
        </AppContainer>
    )
}
