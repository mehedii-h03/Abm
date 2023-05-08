import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const FormButton = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i2zhrlh',
            'template_pe0smuk',
            form.current, 'SvKUSJoQc3Ri3jRn4')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Send');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Could not send message');
            });
    };

    return (
        <div >
            <div className="fixed bottom-5 right-6 w-72  bg-white border border-gray-300 shadow-lg rounded-lg">
                <div className="flex items-center justify-end h-12 bg-red-500 border-red-500 rounded-t-lg">
                </div>
                <div className="flex-1 p-4">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-2">
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-1 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                        First Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="first-name" type="text" name='user_first_name' placeholder="First" />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" name='user_last_name' placeholder="Last" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name='user_email' type="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" name='message' placeholder="Type your message here"></textarea>
                        </div>
                        <div className="flex items-center justify-end">
                            <button type="submit" value="Send" className="btn btn-sm bg-red-500 border-blue-500 text-white rounded-lg px-4 py-2">
                                Send
                            </button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormButton;
