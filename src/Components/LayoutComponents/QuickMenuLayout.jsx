import { Avatar, Space } from 'antd';
import React, { useState } from 'react';
import { RollbackOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons';

const QuickMenuLayout = () => {
    const [showMenu, setShowMenu] = useState(false); // To toggle the menu boxes

    const handleMenuClick = () => {
        setShowMenu(!showMenu); // Toggle the visibility of the boxes when Menu is clicked
    };

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest', // Horizontal smooth scroll
        });
    };

    return (
        <Space
            className="quick-menu-container"
            style={{
                background: 'black',
                position: 'absolute',
                left: '43.5%',
                bottom: '0%',
                borderRadius: '10px 10px 0 0',
                padding: '10px 20px',
                gap: '20px',
            }}
        >
            <Avatar
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 40,
                    xxl: 55,
                }}
                icon={<RollbackOutlined />}
                style={{
                    transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            <Avatar
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 40,
                    xxl: 55,
                }}
                icon={<HomeOutlined />}
                style={{
                    transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            <Avatar
                size={{
                    xs: 20,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 40,
                    xxl: 55,
                }}
                icon={<MenuOutlined />}
                onClick={handleMenuClick} // Toggle the menu on click
                style={{
                    transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />

            {/* Drawer-like menu appearing on clicking the menu icon */}
            {showMenu && (
                <div
                    style={{
                        display: 'flex',
                        gap: '5px',
                        background: 'black',
                        borderRadius: '10px',
                        position: 'absolute',
                        bottom: '110%',
                        left: '-25%',
                    }}
                >
                    <div
                        onClick={() => handleScroll('1')}
                        style={{
                            background: 'black',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    >
                        Home
                    </div>
                    <div
                        onClick={() => handleScroll('2')}
                        style={{
                            background: 'black',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    >
                        About
                    </div>
                    <div
                        onClick={() => handleScroll('3')}
                        style={{
                            background: 'black',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    >
                        Project
                    </div>
                    <div
                        onClick={() => handleScroll('4')}
                        style={{
                            background: 'black',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    >
                        Skill
                    </div>
                    <div
                        onClick={() => handleScroll('5')}
                        style={{
                            background: 'black',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    >
                        Contact
                    </div>
                </div>
            )}
        </Space>
    );
};

export default QuickMenuLayout;
