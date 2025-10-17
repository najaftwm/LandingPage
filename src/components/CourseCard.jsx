import React from 'react'
import Rating from './Rating'

const CourseCard = ({ title, category, rating, price, linkImg }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden mx-2 mb-4'>
      <div className='relative'>
        <img src={linkImg} alt={title} className='w-full h-48 object-cover' />
        <div className='absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-semibold text-[#20B486]'>
          {category}
        </div>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>
          {title}
        </h3>
        <div className='flex items-center justify-between mb-3'>
          <Rating rating={rating} />
          <span className='text-sm text-gray-600'>({rating})</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold text-[#20B486]'>${price}</span>
          <button className='bg-[#20B486] text-white px-4 py-2 rounded hover:bg-[#1a8f6b] transition-colors'>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
