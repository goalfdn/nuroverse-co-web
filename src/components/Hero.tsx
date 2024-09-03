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
          <h2 className='text-2xl md:text-3xl text-teal-50 font-medium text-shadow-sm shadow-serenity-shade'>Grow your business with the power of Gen A.I.</h2>
          <h1 className='text-5xl md:text-6xl text-serenity-shade font-display pt-2'>
            <span>
              THE <span className='text-serenity'>{subjects[index]}</span> WAY
            </span>
          </h1>
          <h2 className='py-7 text-xl md:text-2xl'>
            Experience the benefits of early AI adoption with our easy-to-integrate solutions. Elevate customer engagement and retention with tailored experiences that drive lasting results.
          </h2>
          {
            // submittedEmail ?
            // <p className="text-5 py-4"><span className="gold-and-bold">Thank you</span> for joining the waitlist. <span className="gold-and-bold">Stay tuned</span> for updates.</p> :
            // !showEmail ?
            <a href='https://calendly.com/d/cn5q-4tr-cj6/nuroverse-introductory-call' target='_blank' className="btn-primary">
              {'Get Started'}
            </a>
            // :
            // <div className="flex flex-col">
            //   <form className="flex flex-row" action="#" onSubmit={submitEmail}>
            //     <input
            //       type="email"
            //       value={email}
            //       onChange={(e) => setEmail(e.target.value)}
            //       className="max-w-[75vw] md:!max-w-[250px] pt-1 pb-2 px-2 rounded-md mr-1 border-0 mt-4 font-sans text-trusty-500"
            //       placeholder="Your Email Here"
            //       />
            //     <button className="btn-primary mt-4" type="submit">
            //       {'✓'}
            //     </button>
            //   </form>
            // </div>
          }
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
