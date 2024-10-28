import { useState, type FormEvent, type FormEventHandler } from "react";

export default function SubmissionForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted!");
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setCompanyName('');
    setMessage('');
    setShowSuccess(true);
  }

  if (showSuccess) return <div className="my-14 md:mx-3 p-4 text-xl text-trusty-400 border-2 border-trusty-200 bg-trusty-100 rounded-lg">
    Thank you for your submission! We will be in touch soon.
  </div>;
  
  return (
    <form className="flex flex-col mt-14 md:mx-3 justify-stretch" onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row">
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="flex flex-1 my-3 md:mx-3 p-2 rounded-lg" type="text" placeholder="First Name" required />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="flex flex-1 my-3 md:mx-3 p-2 rounded-lg" type="text" placeholder="Last Name" required />
      </div>
      <div className="flex flex-col md:flex-row">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="flex flex-1 my-3 md:mx-3 p-2 rounded-lg" type="text" placeholder="Work Email" required />
        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="flex flex-1 my-3 md:mx-3 p-2 rounded-lg" type="text" placeholder="Company Name" required />
      </div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="flex flex-row my-3 md:mx-3 p-2 rounded-lg" rows={5} placeholder="Type your message here..." required />
      <button type="submit" className="self-end md:mx-3 btn-secondary mt-4">Submit</button>
    </form>
  );
}