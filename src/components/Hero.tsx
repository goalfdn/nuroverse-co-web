import React, { useEffect, useState } from 'react';

const hapiKey = import.meta.env.HAPIKEY;

export default function Hero() {
  const [index, setIndex] = useState(0);

  // const [showEmail, setShowEmail] = useState(false);
  // const [submittedEmail, setSubmittedEmail] = useState(false);
  // const [email, setEmail] = useState('');

  const subjects = ['EASY', 'QUICK', 'EFFECTIVE', 'SMART'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % subjects.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);

  // const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!!email && email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+/)) {
  //     // submit email to hubspot
  //     try {
  //       await fetch('/api/notify', {
  //         method: 'POST',
  //         body: JSON.stringify({ email, hapiKey }),
  //         headers: new Headers({
  //           "Content-Type": "application/json",
  //           "Accept": "application/json"
  //         })
  //       });
  //       setSubmittedEmail(true);
  //     } catch (e) {
  //       alert('Failed to submit email. Please try again.');
  //       console.error(e);
  //     }
  //   } else {
  //     alert('Invalid email.');
  //   }
  // }

  // const showForm = () => {
  //   setShowEmail(true);
  // };
  
  return (
    <div className='w-screen my-h-screen'>
      <div className='absolute top-0 bottom-0 right-0 left-0 bg-hero bg-no-repeat bg-cover bg-bottom z-0' />
      <div className='absolute top-0 bottom-0 right-0 left-0 bg-trusty-900 opacity-70 z-10' />
      <div className='flex flex-1 w-full h-full z-20'>
        <div className='my-container m-auto z-20'>
          <h1 className='text-5xl md:text-6xl text-serenity uppercase font-display pt-2'>
            Boost Client Outcomes With A.I.
          </h1>
          <p className='py-7 text-trusty-50 text-xl md:text-2xl'>
            Nuroverse Intelligence integrates our virtual wellness coordinator with your healthcare service to coordinate with providers and offer ongoing support to your clients.
          </p>
          <div>
            <a href='https://calendly.com/d/cn5q-4tr-cj6/nuroverse-introductory-call' target='_blank' className="btn-primary">
              {'Get Started'}
            </a>
          </div>
          <div className='mt-14'>
            <a href='https://trynuron.com/' target='_blank' className='text-lg uppercase font-bold text-serenity'>
              <span className='underline underline-offset-4'>{'See Nuroverse Intelligence in Action'}</span><span>{' ›'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformButton({ type }: { type: string }) {
  return (
    <div
      className="mr-1 bg-center bg-contain bg-no-repeat aspect-square h-5"
      style={{ backgroundImage: `url("/src/images/${type}.webp")` }}
    />
  );
}
