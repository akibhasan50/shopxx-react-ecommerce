import React from 'react'
import { useLocation } from 'react-router';

export default function Success() {
    const location =  useLocation();

    console.log(location)
    return (
        <div
            style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
        
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </div>
    )
}
