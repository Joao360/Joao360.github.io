'use client';

import { useRouter } from 'next/navigation'

export default function Success() {
    const router = useRouter();

    return (
        <main className='bg-gray-100'>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-lg font-bold mb-4 text-black text-center">Thank You for Reaching Out!</h2>
                    <p className="text-black">{'Your message has been sent successfully. I\'ll get back to you as soon as possible. Thank you for taking the time to contact me!'}</p>

                    <div className="flex justify-center mt-6">    
                        <button 
                            onClick={() => router.replace('/')}
                            className='hover:shadow-form rounded-md bg-blue-950 py-3 px-8 text-base font-semibold text-white outline-none'
                        >
                            Go back to Home
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}