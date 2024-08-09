// @ts-nocheck

import { useEffect } from "react";

export const CookieChecker = () => {

    let messageHandler = (event: any) => {
        console.log(`event`, event.data);
    }

    useEffect(() => {
        window.addEventListener('message', messageHandler);
        
        const frame = document.createElement('iframe');
        frame.id = "hello";
        frame.src = "/ThirdPartyCookies.html";
        frame.sandbox = "allow-scripts allow-same-origin";
        frame.style = "display:none";
        frame.onload = (e) => {
            frame.contentWindow?.postMessage(JSON.stringify({ 'test': 'cookie' }), '*');
        }

        document.body.appendChild(frame);

        return () => window.removeEventListener('message', messageHandler);
    }, []);

    return null;
};
