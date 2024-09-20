import React from 'react'
import { InstagramOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const SocialLayout = () => {
    return (
        <Space
            className='flex-column gap-0 rounded-4 rounded-start-0 py-0 ps-2 '
            style={{
                position: 'absolute',
                top: '40%',
                left: '0'
            }}
        >
            <Avatar
                style={{ color: 'black', background: 'none' }}
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 35,
                    xxl: 45,
                }}
                icon={<InstagramOutlined />}
            />
            <Avatar
                style={{ color: 'black', background: 'none' }}
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 35,
                    xxl: 40,
                }}
                icon={<GithubOutlined />}
            />
            <Avatar
                style={{ color: 'black', background: 'none' }}
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 35,
                    xxl: 40,
                }}
                icon={<LinkedinOutlined />}
            />
        </Space>
    )
}

export default SocialLayout