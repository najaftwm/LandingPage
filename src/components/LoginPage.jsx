import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // eslint-disable-line
import FormBg from '../assets/formbg.jpg';

const LoginPage = ({ embedded = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    language: "",
    experience: "",
    market: "",
    researchMarket: "",
    platform: "",
    platformName: "",
    interest: "",
    usesPlatform: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otpError, setOtpError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpSentMessage, setOtpSentMessage] = useState("");
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [showAllFields, setShowAllFields] = useState(false);

  const AUTH_TOKEN =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTc2OTU0MUI3QjY3QzQ5MSIsImlhdCI6MTc1OTcyNDI0NywiZXhwIjoxOTE3NDA0MjQ3fQ.PuwWxKPkSqhjFXSKPQmXX7kU40BPCXQLqM6PLWNP_p-iq6PdYSEJn--uOyB4vdY2Dr89NrtuMcU-WsI5ih5NoA";
  const CUSTOMER_ID = "C-769541B7B67C491";
  const phoneRegex = /^\d{10}$/;

  const languages = [
    "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Gujarati", "Marathi", "Punjabi"
  ];

  const experiences = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Pro Trader", label: "Pro Trader" },
  ];

  const markets = [
    "NSE Futures", "MCX", "NSE Options", "MCX Option", "Crypto", "Forex", "US Stocks", "Comex"
  ];

  const interests = [
    "Trade",
    "Research",
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    if (successMessage) setSuccessMessage("");
    if (otpSentMessage) setOtpSentMessage("");
  };

  const handleCheckboxChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    if (successMessage) setSuccessMessage("");
    if (otpSentMessage) setOtpSentMessage("");
  };

  const validateForm = (isInitial = false) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid 10-digit Indian phone number is required";

    if (!isInitial) {
      if (!formData.experience.trim()) newErrors.experience = "Trading experience is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.language) newErrors.language = "Please select a language";
      if (!formData.interest.trim()) newErrors.interest = "Please select your interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // === NEW: Check Phone + send OTP ===
  const handleCheckPhoneAndSendOTP = async (e) => {
    console.log("Checking phone and sending OTP for:", formData.phone);
    e.preventDefault();
    // if (!validateForm(true)) return;

    setIsSubmitting(true);
    try {
      // 1️⃣ Check if phone exists in DB
      const { data } = await axios.post(
        "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
        { mode: "checkPhone", name: formData.name, phone: formData.phone }
      );
      console.log("CheckPhone Response:", data);

      if (data['status'] === "success") {
        // Store tempId in localStorage
        console.log("TempId stored:", data.tempId);
        localStorage.setItem("tempId", data.tempId);
        // 2️⃣ Send OTP after checking phone
        await sendOTP(formData.phone);
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setSubmitError(msg);
      toast.error(msg);
    }
    setIsSubmitting(false);
  };

  const sendOTP = async (phoneNumber) => {
    console.log("Sending OTP to:", phoneNumber);
    try {
      const url = "https://cpaas.messagecentral.com/verification/v3/send";
      const params = { countryCode: "91", flowType: "SMS", mobileNumber: phoneNumber, customerId: CUSTOMER_ID };
      const response = await axios.post(url, null, { params, headers: { authToken: AUTH_TOKEN } });
      const id = response.data?.data?.verificationId;
      if (id) {
        console.log("OTP sent successfully. Verification ID:", id);
        setVerificationId(id);
        setShowOTPModal(true);
        setOtpSentMessage("OTP sent to your phone number!");
        setTimeout(() => setOtpSentMessage(""), 5000);
        toast.success("OTP sent successfully");
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch {
      setSubmitError("Failed to send OTP");
      toast.error("Failed to send OTP");
    }
  };

  const validateOTP = async (phoneNumber, verificationId, code) => {
    try {
      const response = await axios.get(
        "https://cpaas.messagecentral.com/verification/v3/validateOtp",
        {
          params: { countryCode: "91", mobileNumber: phoneNumber, verificationId, customerId: CUSTOMER_ID, code },
          headers: { authToken: AUTH_TOKEN }
        }
      );
      if (response.data.responseCode === 200 && response.data?.data?.verificationStatus === "VERIFICATION_COMPLETED") {
        toast.success("OTP verified successfully!");
        setIsOTPVerified(true);
        setShowAllFields(true);
        setShowOTPModal(false);
      } else {
        setOtpError("Invalid OTP. Please try again.");
        toast.error("OTP verification failed");
      }
    } catch {
      setOtpError("Failed to validate OTP. Please try again.");
      toast.error("OTP validation error");
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      setOtpError("OTP must be 4 digits");
      return;
    }
    setOtpError("");
    validateOTP(formData.phone, verificationId, otp);
  };

  // === FINAL SUBMIT ===
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(false)) return;

    const tempId = localStorage.getItem("tempId");
    if (!tempId) {
      setSubmitError("Invalid session. Please start over.");
      return;
    }

    setIsSubmitting(true);
    console.log("Final submit data:", { mode: "submit", tempId, ...formData });
    try {
      await axios.post(
        "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
        { mode: "submit", tempId, ...formData }
      );
      toast.success("Registration completed successfully!");
      setSuccessMessage("Successfully registered! Our team will reach out to you.");
      localStorage.removeItem("tempId");
    } catch {
      setSubmitError("Failed to submit form. Please try again.");
      toast.error("Failed to submit form. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Form Background & Fields */}
      <div className="relative bg-[#f8f8f4] rounded-xl shadow-lg p-6 md:p-7 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
          <img src={FormBg} alt='Form Background' className='w-full h-full object-cover opacity-30' />
        </div>
        <div className="relative z-10">
          {!successMessage && <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-5 text-black">Register</h2>}

          {submitError && <p className="text-red-500 text-sm text-center mb-3">{submitError}</p>}
          {otpSentMessage && !successMessage && <p className="text-green-500 text-sm text-center mb-3">{otpSentMessage}</p>}
          
          {successMessage ? (
            <div className="text-center py-8">
              <div className="text-green-600 font-semibold text-lg md:text-xl mb-4">
                {successMessage}
              </div>
            </div>
          ) : (
            <>
              {!showAllFields && (
            <form onSubmit={handleCheckPhoneAndSendOTP} className="flex flex-col gap-3.5">
              <input type="text" name="name" placeholder="Enter Your Full Name" value={formData.name} onChange={handleInputChange} disabled={isSubmitting} className="w-full border rounded-md p-2.5" />
              
              {/* Phone Number Field  */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-sm font-medium">🇮🇳 +91</span>
                </div>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Enter Your Contact Number" 
                  value={formData.phone} 
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))} 
                  disabled={isSubmitting} 
                  className="w-full border rounded-md p-2.5 pl-16 focus:outline-none focus:ring-2 focus:ring-[#124aad] focus:border-transparent" 
                />
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full bg-[#124aad] text-white py-2.5 rounded-md">{isSubmitting ? "Sending OTP..." : "Send OTP"}</button>
            </form>
          )}

          {showOTPModal && (
            <form onSubmit={handleOTPSubmit} className="mt-4 flex gap-2">
              <input type="text" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} placeholder="Enter OTP" className="flex-1 border rounded-md p-2.5" />
              <button type="submit" className="bg-[#124aad] text-white py-2.5 px-4 rounded-md">Verify</button>
            </form>
          )}

          {showAllFields && (
            <form onSubmit={handleFinalSubmit} className="mt-4 flex flex-col gap-3.5">
              <div className="text-center text-green-600 font-semibold mb-3">
                 Phone verified successfully! Please complete your registration.
              </div>
              
              {/* Trading Experience - Horizontal Checkboxes */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Select Trading Experience</label>
                <div className="flex flex-wrap gap-4">
                  {experiences.map(exp => (
                    <label key={exp.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={exp.value}
                        checked={formData.experience === exp.value}
                        onChange={() => handleCheckboxChange('experience', exp.value)}
                        className="mr-2"
                      />
                      <span className="text-sm">{exp.label}</span>
                    </label>
                  ))}
                </div>
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>

              {/* Interest - Horizontal Checkboxes */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-4">What's your interest?</label>
                <div className="flex flex-wrap gap-4">
                  {interests.map(interest => (
                    <label key={interest} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value={interest}
                        checked={formData.interest === interest}
                        onChange={() => handleCheckboxChange('interest', interest)}
                        className="mr-2"
                      />
                      <span className="text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
                {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest}</p>}
              </div>

              {/* Conditional Market Fields */}
              {formData.interest === "Trade" && (
                <select name="market" value={formData.market} onChange={handleInputChange} className="w-full border rounded-md p-2.5">
                  <option value="">Select the market you want to trade in (Optional)</option>
                  {markets.map(market => (
                    <option key={market} value={market}>{market}</option>
                  ))}
                </select>
              )}

              {formData.interest === "Research" && (
                <select name="researchMarket" value={formData.researchMarket} onChange={handleInputChange} className="w-full border rounded-md p-2.5">
                  <option value="">Select the market you want to Research (Optional)</option>
                  {markets.map(market => (
                    <option key={market} value={market}>{market}</option>
                  ))}
                </select>
              )}

              {/* Trading Platform Usage - Radio Buttons */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Do you use any trading platform?</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="usesPlatform"
                      value="Yes"
                      checked={formData.usesPlatform === "Yes"}
                      onChange={() => handleCheckboxChange('usesPlatform', 'Yes')}
                      className="mr-2"
                    />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="usesPlatform"
                      value="No"
                      checked={formData.usesPlatform === "No"}
                      onChange={() => handleCheckboxChange('usesPlatform', 'No')}
                      className="mr-2"
                    />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>

              {/* Conditional Platform Selection */}
              {formData.usesPlatform === "Yes" && (
                <select name="platform" value={formData.platform} onChange={handleInputChange} className="w-full border rounded-md p-2.5">
                  <option value="">Which platform you use (Optional)</option>
                  <option value="Zerodha">Zerodha</option>
                  <option value="Upstox">Upstox</option>
                  <option value="Angel One">Angel One</option>
                  <option value="5Paisa">5Paisa</option>
                  <option value="Other">Other</option>
                </select>
              )}

              {formData.platform === "Other" && (
                <input 
                  type="text" 
                  name="platformName" 
                  placeholder="Enter Platform Name" 
                  value={formData.platformName} 
                  onChange={handleInputChange} 
                  className="w-full border rounded-md p-2.5" 
                />
              )}

              {/* State Field */}
              <select name="state" value={formData.state} onChange={handleInputChange} className="w-full border rounded-md p-2.5">
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}

              {/* Language Field */}
              <select name="language" value={formData.language} onChange={handleInputChange} className="w-full border rounded-md p-2.5">
                <option value="">Select Language</option>
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#124aad] text-white py-2.5 rounded-md">
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </button>
            </form>
          )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
