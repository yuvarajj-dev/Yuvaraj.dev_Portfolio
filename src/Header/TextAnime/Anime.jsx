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
        position: "unset",
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
        width: '130px',
        height: "2rem",
        fontSize: '15px',
        marginTop: '15px',
        marginLeft: '10px',
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
    fontSize: "20px",
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
})

const items = ["Yuvaraj.dev"]
export default function Anime() {
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
                                <img
                                    src="/Assest/icons8-hand-peace.gif"
                                    alt="Hand Peace GIF"
                                    width="40"
                                    height="40"
                                    className="gifFile" // Add any class for styling if needed
                                />
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
