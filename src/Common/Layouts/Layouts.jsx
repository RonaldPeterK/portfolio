import React from 'react';
import { Layout, Space, Typography } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import BrandLayout from '../../Components/LayoutComponents/BrandLayout';
import DarkLightModeLayout from '../../Components/LayoutComponents/DarkLightModeLayout';
import DownloadBtnLayout from '../../Components/LayoutComponents/DownloadBtnLayout';
import SocialLayout from '../../Components/LayoutComponents/SocialLayout';
import QuickMenuLayout from '../../Components/LayoutComponents/QuickMenuLayout';
import Home from '../../Pages/Home/home';
import { Container } from 'react-bootstrap';
import './Layouts.css';
import About from '../../Pages/About/About';

const { Content } = Layout;
const { Title } = Typography;

const Layouts = () => {


    return (
        <Layout style={{ height: '100vh' }}>
            <Content style={{ background: '#fff' }}>
                <BrandLayout />
                <DarkLightModeLayout />
                <DownloadBtnLayout />
                <SocialLayout />
                <QuickMenuLayout />

                <Container fluid className='main-frame h-100 w-100'>
                    <div className="scroll-section" id='1'>
                        <Home />
                    </div>
                    <div className="scroll-section" id='2'>
                        <About />
                    </div>
                    <div className="scroll-section" id='3'>
                        <Home />
                    </div>
                    <div className="scroll-section" id='4'>
                        <Home />
                    </div>
                    <div className="scroll-section" id='5'>
                        <Home />
                    </div>
                </Container>

                <Space style={{ position: 'absolute', right: '1%', bottom: '0%' }}>
                    <Title level={4}>Scroll Right <SwapRightOutlined /></Title>
                </Space>
            </Content>
        </Layout >
    );
};

export default Layouts;
