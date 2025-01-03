import React, { useState, useEffect } from 'react';
import CustomScrollbar from 'react-custom-scrollbars'; // Example custom scrollbar component
import WebSocket from 'websocket'; // Example WebSocket library

export default function CustomTabs({ TotalTab, value, onChange, Scrollbutton, maxWidth }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Simulated WebSocket connection
    useEffect(() => {
        const socket = new WebSocket('ws://example.com');
        socket.onmessage = function(event) {
            // Handle WebSocket message
            // Example: Update scroll position based on data received
            const data = JSON.parse(event.data);
            setScrollPosition(data.scrollPosition);
        };
    }, []);

    const handleScroll = (event) => {
        // Update scroll position when scrollbar is scrolled
        setScrollPosition(event.target.scrollTop);
    };

    return (
        <>
            <CustomScrollbar style={{ width: '600px', maxHeight: '400px' }} onScroll={handleScroll}>
                {TotalTab?.map(({ label, Component }, i) => (
                    <div key={i}>
                        <h2>{label}</h2>
                        {Component}
                    </div>
                ))}
            </CustomScrollbar>
        </>
    );
}
