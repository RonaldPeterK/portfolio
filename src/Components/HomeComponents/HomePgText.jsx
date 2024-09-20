import { Button } from 'antd'
import React from 'react'
import { ArrowRightOutlined, CrownOutlined } from '@ant-design/icons';
const HomePgText = () => {
    return (
        <>
            <div className="big-text flex-column d-flex text-end float-right align-items-end display-1 py-3 pe-1">
                <span>
                    <span className='text1'>Hi,</span>
                    <span className='text2'> I'm</span>
                </span>
                <span className='text2 display-2'>RONALD PETER K</span>
                <span className='text3 text-secondary'>A full-stack developer ready to bring your ideas to life with innovative web solutions. Let’s create something amazing together! 🚀</span>
                <div className="d-flex py-4 gap-4">
                    <Button
                        type='primary'
                        size='large'
                        icon={<CrownOutlined />}
                        iconPosition='end'
                        className='px-4 py-3'
                        style={{ border: '2px solid black', background: 'white', color: 'black' }}
                    >
                        Hire Me
                    </Button>
                    <Button
                        type='primary'
                        size='large'
                        icon={<ArrowRightOutlined />}
                        iconPosition='end'
                        className='px-4 py-3'
                        style={{ background: 'black' }}
                    >
                        Contact Me
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HomePgText