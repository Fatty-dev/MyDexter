import React from 'react';

const SuccessModal = ({ isOpen, handleClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-blue-50 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <svg
                    className="w-16 h-16 text-primary mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 0a10 10 0 100 20 10 10 0 000-20zm4.293 7.293a1 1 0 00-1.414 0L9 11.586 7.121 9.707a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                <h1 className="text-2xl font-semibold text-gray-800">Transaction Successful!</h1>
                <p className="mt-2 text-gray-600">Your subscription has been successfully processed. Thank you for your purchase!</p>
                <button 
                    onClick={handleClose} 
                    className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-md"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;