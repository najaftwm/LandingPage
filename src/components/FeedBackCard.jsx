import React from 'react'

const FeedBackCard = ({ name, role, testimonial }) => {
  return (
    <div className='bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-lg my-8 mx-2 h-64 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all duration-300 group'>
      
      {/* Top Row: Quote Icon + Name + Role */}
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-12 h-12 bg-gradient-to-br from-[#20B486] to-[#1a9a73] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0'>
          <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z'/>
          </svg>
        </div>
        <div className='flex-1'>
          <h1 className='font-bold text-lg text-gray-900 group-hover:text-[#20B486] transition-colors duration-300'>{name}</h1>
          <p className='text-gray-500 text-sm font-medium'>{role}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className='flex-1 flex items-start pt-2'>
        <p className='text-gray-700 text-base leading-relaxed italic'>
          "{testimonial}"
        </p>
      </div>

    </div>
  )
}

export default FeedBackCard
