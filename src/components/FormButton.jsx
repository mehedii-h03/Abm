import React, { useState, useEffect, useRef } from 'react';

const FormButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');

    const formRef = useRef(null);

    useEffect(() => {
        const handleMouseDown = (event) => {
            if (formRef.current && !formRef.current.contains(event.target) && !event.target.matches('.btn-circle')) {
                handleCloseChat();
            }
        };

        if (isChatOpen) {
            window.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isChatOpen]);

    const handleOpenChat = () => {
        setIsChatOpen(true);
    };

    const handleCloseChat = () => {
        setIsChatOpen(false);
        setMessage('');
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        const email = 'mehedii.h03@gmail.com';
        const subject = 'New message from chat';
        const body = message;
        const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
        window.open(mailtoUrl);
        setMessage('');
    };

    return (
        <div className="fixed bottom-6 right-6">
            <button className="btn btn-circle bg-red-500 border-red-500 text-white flex items-center justify-center" onClick={handleOpenChat}>
                Chat
            </button>

            {isChatOpen && (
                <div className="fixed bottom-20 right-6 w-72 h-80 bg-white border border-gray-300 shadow-lg rounded-lg" ref={formRef}>
                    <div className="flex items-center justify-end h-12 bg-red-500 border-red-500 rounded-t-lg">
                        <button className="text-white px-4 py-2" onClick={handleCloseChat}>
                            Close
                        </button>
                    </div>
                    <div className="flex-1 p-4">
                        <textarea className="w-full h-full resize-none border border-gray-300 rounded-lg p-2" value={message} onChange={handleMessageChange} />
                    </div>
                    <div className="flex items-center justify-end p-4">
                        <button className=" btn btn-sm bg-red-500 border-red-500 text-white rounded-lg px-4 py-2" onClick={handleSend}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormButton;
