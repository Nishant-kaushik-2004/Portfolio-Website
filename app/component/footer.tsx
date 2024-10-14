import React from 'react'

export default function Footer() {
  return (
    <footer className='text-center mb-10 px-4 text-gray-500'>
      <small className='mb-2 text-xs'>
        &copy; 2024 Nishant. All rights reserved
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>
          About this website: 
        </span>
        {" "}built with react and next.js (App Router and Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
