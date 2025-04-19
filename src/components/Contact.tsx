'use client';

import { FC, useState } from 'react';
import { Alert } from './Alert';

const Contact: FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      setStatus('pending');
      setError(null);
      const res = await fetch(
        "/_forms.html",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
        }
      );

      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (error) {
      setError(`${error}`);
    }
  };

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

      <form
        name='contact'
        className='w-full max-w-lg bg-white rounded-lg shadow-lg p-8'
        onSubmit={onSubmitForm}
      >
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
            name='name'
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
            name='email'
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
            name='message'
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200'
          ></textarea>
        </div>

        <div className='flex justify-center'>
          <button
            className='hover:shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300 rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none'
            disabled={status === 'pending'}
          >
            Submit
          </button>
        </div>

        {status === 'pending' && (
          <div className='mt-5 text-sm text-gray-600'>
            Please wait...
          </div>
        )}
        {status === 'ok' && <Alert type="success" className='mt-5'>Submitted!</Alert>}
        {status === 'error' && <Alert type="error" className='mt-5'>{error}</Alert>}
      </form>
    </div>
  );
};

export default Contact;