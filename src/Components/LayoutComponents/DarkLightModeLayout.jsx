import { Avatar, Space } from 'antd'
import React from 'react'
import { MoonOutlined } from '@ant-design/icons'

const DarkLightModeLayout = () => {
    return (
        <Space
            className='rounded-5 rounded-top-0 px-1'
            style={{
                background: 'black',
                position: 'absolute',
                top: '0',
                left: '49%'
            }}
        >
            <Avatar
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 35,
                    xxl: 45,
                }}
                icon={<MoonOutlined />}
            />
        </Space>
    )
}

export default DarkLightModeLayout