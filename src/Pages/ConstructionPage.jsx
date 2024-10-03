import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/constructionAni.json';
import { Button, Layout, Typography, Row, Col } from 'antd';
import myresume from '../Assets/my-resume.pdf';

const { Content } = Layout;
const { Title, Text } = Typography;


const ConstructionPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Your Lottie animation JSON
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: '#1d1d1d', // Dark theme background
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Lottie Animation Background */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        
      </div>

      {/* Content */}
      <Content
        style={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff', // Text color for dark theme
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <Row className='justify-content-center align-items-center p-3 p-md-5 gap-4'>
          <Col xxl={12} xl={12} lg={13} md={24} sm={24} xs={24}>
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          </Col>
          <Col xxl={8} xl={8} lg={9} md={24} sm={24} xs={24} className='flex-column d-flex text-start p-3 p-md-5 border-1 border'>
            <Title level={1} style={{ color: '#f0f0f0' }}>Website Under Construction</Title>
            <Text style={{ color: '#d9d9d9', marginBottom: '20px' }}>
              Our site is currently under construction, but we're working hard to bring you a better experience. Stay tuned!
            </Text>
            <Text style={{ color: '#d9d9d9', marginBottom: '40px' }}>
              Feel free to download my resume while you wait.
            </Text>
            <Button
              type="primary"
              size="large"
              href={myresume}
              style={{
                maxWidth:'12rem',
                padding: '10px 40px',
                backgroundColor: '#ff4d4f',
                borderColor: '#ff4d4f',
              }}
            >
              Download My Resume
            </Button>
          </Col>
        </Row>
          
        
      </Content>
    </Layout>
  );
};

export default ConstructionPage;
