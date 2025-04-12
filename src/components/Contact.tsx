'use client';

import { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-10 mt-10 flex w-full flex-col items-center justify-center'>
        <h1 className='mb-5 text-center text-4xl font-bold text-blue-950'>
          Have a Question or Idea?
        </h1>
        <p className='mb-5 text-center text-lg font-normal text-gray-600'>
          I’m just a message away! Whether you want to discuss a potential collaboration or simply have a question, reach out below — I’d be happy to connect.
        </p>
      </div>

      <form className='w-full max-w-lg bg-white rounded-lg shadow-lg p-8' name='contact' action="/success" method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-gray-700'
          >
            Your Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-gray-700'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200'
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button className='hover:shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300 rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;