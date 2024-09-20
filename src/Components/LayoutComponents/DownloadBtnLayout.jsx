import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { CloudDownloadOutlined } from '@ant-design/icons';

const DownloadBtnLayout = () => {
    const [buttonText, setButtonText] = useState('Download My Resume');

    // Function to handle the file download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/my-resume.pdf'; // Replace with your correct file path
        link.setAttribute('download', 'ronaldPeterK-Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Function to update button text based on screen size
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setButtonText('Resume'); // Shorten text for small devices
        } else {
            setButtonText('Download My Resume'); // Full text for larger devices
        }
    };

    // Update button text on component mount and window resize
    useEffect(() => {
        handleResize(); // Set the correct button text when the component mounts
        window.addEventListener('resize', handleResize); // Add a resize listener

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
        };
    }, []);

    return (
        <Button
            style={{
                position: 'absolute',
                right: '2%',
                top: '2%',
                border: '2px solid black',
                color: 'black',
                backgroundColor: 'white',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
            size="large"
            icon={<CloudDownloadOutlined />}
            onClick={handleDownload}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
            {buttonText}
        </Button>
    );
};

export default DownloadBtnLayout;
