import React from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
<div className='grid md:grid-cols-2 gap-10'>
    <div className='space-y-8'>
<h2 className='text-pink-600 text-5xl'>Get in touch!</h2>
<p className='text-grey-600 text-[18px] pt-2'>
    Drop me a line, give me a call, or send me a message by submitting the form.
</p>
<div className='flex items-center' data-aos="zoom-in-up">
</div>
<FaRegEnvelope size={25}  /> sadiaimranmalik24@gmail.com

<div className='flex gap-3 items-center' data-aos="zoom-in-up">
<BsFillTelephoneForwardFill  size={30} /> (021) 000-9999
</div>
    </div>
    <div className='space-y-8'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Name</label>
        <input type='text'
        className='h-[40px] bg-transparent border-accent'
        id='name'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Email</label>
        <input type='text'
        className='h-[40px] bg-transparent border-accent'
        id='email'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Massage</label>
        <textarea
        className='bg-transparent border-accent'
        id='msg' rows={8}>
          </textarea>
      </div>
      <button className='bg-accent p-1 px-6 border-white'>send</button>
    </div>
    </div>      
    </div>
  );
};

export default Contact
