import React from 'react';
import { Space, Typography } from 'antd';

const { Title } = Typography;

const BrandLayout = () => {
    return (
        <>
            <Space className='align-items-center px-2' style={{ background: 'white', position: 'absolute', top: '2%', left: '2%' }}>
                <Title level={3}>RON</Title>
            </Space>
        </>
    )
}

export default BrandLayout