import React from 'react'
import Slider from 'react-slick'
import FeedBackCard from './FeedBackCard'

const FeedBack = () => {
  const feedbackData = [
    {
      id: 1,
      name: "Rajesh K",
      role: " Mumbai",
      testimonial: "Royalty Research Alerts transformed my trading game. Their positional strategies helped me double my portfolio in six months!"
    },
    {
      id: 2,
      name: "Priya S",
      role: "Delhi",
      testimonial: "The options trading alerts are spot-on. I've never felt more confident in the market."
    },
    {
      id: 3,
      name: "Amit P",
      role: "Bangalore",
      testimonial: "Excellent Demat and equity services—seamless and reliable."
    },
    {
      id: 4,
      name: "Rohit S.",
      role: "Beginner Trader",
      testimonial: "Royalty Research Alerts made opening my first Demat account super easy! Their support team helped me understand everything step by step."
    },
    {
      id: 5,
      name: "Sneha M.",
      role: "Equity Investor",
      testimonial: "I started trading confidently after joining Royalty Research Alerts. Their market research is accurate and very helpful."
    },
    
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true, // modern arrow navigation
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className='w-full bg-gray-50 py-24 px-4'>
      <div className='max-w-[1200px] mx-auto text-center'>
        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
          What Our <span className='text-[#20B486]'>Users Say</span>
        </h2>
        <p className='text-gray-500 text-base md:text-lg mt-4'>
          Real feedback from our Users who have transformed their trading journey with us.
        </p>

        {/* Slider */}
        <div className='mt-12'>
          <Slider {...settings}>
            {feedbackData.map((feedback) => (
              <FeedBackCard
                key={feedback.id}
                name={feedback.name}
                role={feedback.role}
                testimonial={feedback.testimonial}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeedBack
