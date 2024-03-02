import React from 'react'
import { useRef } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'
import "./Anime.css";

const AppContainer = styled('div', {
    width: '400px',
    height: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 957px)': {
        width: '60px',
    },
    '@media (max-width: 648px)': {
        width: '100px',
    },
})

const Container = styled('div', {
    display: 'flex',
    gap: 10,
   
})

const Box = styled('div', {
    position: 'relative',
    height: 50,
    width: 300,
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
    fontSize : '30px',
    backfaceVisibility: 'hidden',
    borderRadius: '50px', 
    '@media (max-width: 957px)': {
        marginLeft: '40px',
        fontSize: '25px',
    },
    '@media (max-width: 648px)': {
        width: '150px',
        height: "80%",
        fontSize:'19px',
        marginTop: '6px',
        marginLeft: '0px',
    },
}

const FrontBox = styled(animated.div, {
    ...SharedStyles,
    backgroundColor: '#fafafa',
    border: 'solid 2px #1a1a1a',
})

const BackBox = styled(animated.div, {
    ...SharedStyles,
    backgroundColor: '#59D5E0',
    border: 'solid 2px #59D5E0',
    color: '#fafafa',
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
                            {'?'}
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
