'use client';

import { FC } from 'react';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

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

      <form className='p-5 w-full sm:w-1/2' name='contact' action="/success" method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-black'
          >
            Your Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-950 focus:shadow-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-black'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-950 focus:shadow-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-black'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-950 focus:shadow-md'
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button className='hover:shadow-form rounded-md bg-blue-950 py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;