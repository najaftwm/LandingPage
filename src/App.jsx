import React, { useState, useEffect } from 'react'
import { HeroSection, Courses, Categories,FeedBack,HowItWorks,FAQ,MoveToTop,OurServices,WhyWeStandOut,Footer, LoginPage } from './components'

function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(true);

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeRegisterModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && showRegisterModal) {
        closeRegisterModal();
      }
    };

    if (showRegisterModal) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset'; // Restore body scroll when modal is closed
    };
  }, [showRegisterModal]);

  return (
    <div className="app">
      {/* Register Modal */}
      {showRegisterModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
          role="dialog" aria-modal="true"
        >
          <div 
            className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl w-11/12 max-w-xs sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); closeRegisterModal(); }}
              className="absolute top-4 right-4 z-50 bg-gray-200 hover:bg-gray-300 rounded-full p-3 sm:p-2 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 sm:w-5 sm:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            {/* Register Form */}
            <div className="p-0">
              <LoginPage embedded={true} />
            </div>
          </div>
        </div>
      )}

      {/* Main Website Content */}
      <HeroSection/>
      <OurServices/>
      {/* <Courses/> */}
      <Categories/>
      <FeedBack/>
      <HowItWorks/>
      <WhyWeStandOut/>
      <FAQ/>
      <Footer/>
      <MoveToTop/>
    </div>
  )
}

export default App
