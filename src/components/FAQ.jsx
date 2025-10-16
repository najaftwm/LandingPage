import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const faqRef = useRef(null)

  const faqData = [
    {
      question: "What services does Royalty Research Alerts offer?",
      answer: "We offer a range of services, including portfolio management, demat account, equity trading, positional trading, swing trading, commodity trading, and options and futures."
    },
    {
      question: "How do I get started with Royalty Research Alerts?",
      answer: "Getting started is easy! Simply sign up on our website and choose the services that suit your needs."

    },
    {
      question: "What is the area of expertise of Royalty Research Alerts",
      answer: "Our team has extensive experience in the stock market, with a proven track record of delivering results."
    }
  ]

  // Handle click outside to close FAQ
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-gray-50 py-16 px-4 mb-96" ref={faqRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-all duration-500 ease-in-out flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 transform translate-y-0'
                    : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}
              >
                <div className="px-6 pb-4 transform transition-transform duration-500 ease-out">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
