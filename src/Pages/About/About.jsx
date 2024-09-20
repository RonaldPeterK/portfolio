import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomePgText from '../../Components/HomeComponents/HomePgText';
import HomePgImage from '../../Components/HomeComponents/HomePgImage';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
    const controlsText = useAnimation();
    const controlsImage = useAnimation();
    const [scrollX, setScrollX] = useState(0);

    const handleScroll = () => {
        setScrollX(window.scrollX);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (scrollX < screenWidth * 0.5) {
            controlsText.start('visible');
            controlsImage.start('visible');
        } else {
            controlsText.start('hidden');
            controlsImage.start('hidden');
        }
    }, [scrollX, controlsText, controlsImage]);

    const textAnimation = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } }
    };

    const imageAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
    };

    return (
        <>
            <Container style={{ height: '100%' }}>
                <Row className='align-items-center h-100'>

                    {/* Text Column with Animation */}
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className='ps-4 ps-md-0'>
                        <motion.div
                            initial="hidden"
                            animate={controlsText}
                            variants={textAnimation}
                        >
                            <HomePgText />
                        </motion.div>
                    </Col>

                    {/* Image Column with Animation */}
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className='d-none d-lg-flex p-3'>
                        <motion.div
                            initial="hidden"
                            animate={controlsImage}
                            variants={imageAnimation}
                        >
                            <HomePgImage />
                        </motion.div>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default About;
