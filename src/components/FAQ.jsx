import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'
import FAQImage from '../assets/FAQ.png'

const FAQ = () => {
  // State to track which FAQ items are open (for mobile click functionality)
  const [openItems, setOpenItems] = useState(new Set())
  
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
    },
    {
      question: "What is a Demat Account?",
      answer: "A Demat (Dematerialized) account holds your shares and securities in electronic form, making trading safer and more efficient."
    },
    {
      question: "Do I need prior experience to open an account?",
      answer: "Absolutely not! We're specialized in helping beginners start from scratch."
    },
    {
      question: "How long does it take to open an account?",
      answer: "Typically 1-2 business days with our fast-track process."
    },
    {
      question: "Are there any fees?",
      answer: "We offer competitive, transparent pricing – no hidden charges in our kingdom."
    }
  ]

  // Function to toggle FAQ item open/closed state
  const toggleFAQ = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full bg-[#eef7ff] py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
            FAQS
          </span>
          <h2 className="text-[40px] leading-tight md:text-[56px] md:leading-[1.1] font-extrabold text-gray-900 mb-6">
            Have a question?
            <br />
            Here are some
            <br />
            solutions
          </h2>
          <p className="text-gray-600 text-lg mb-8">For more queries, feel free to reach us.</p>
          <div className="w-full max-w-md">
            <img 
              src={FAQImage}
              alt="FAQ illustration" 
              className="w-full h-[12.5rem] md:h-[18rem] object-contain pr-13"
            />
          </div>
        </div>

        {/* Right accordion list */}
        <div className="space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openItems.has(index)
            return (
              <div key={index} className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div 
                  className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div>
                    {isOpen ? (
                      <X className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:rotate-45" />
                    )}
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  // Desktop: hover effect, Mobile: click state
                  isOpen 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100'
                }`}>
                  <div className="px-6 md:px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
