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
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Punjabi",
  ];

  const experiences = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Pro Trader", label: "Pro Trader" },
  ];

  const markets = [
    "NSE Futures",
    "MCX",
    "NSE Options",
    "MCX Option",
    "Crypto",
    "Forex",
    "US Stocks",
    "Comex",
  ];

  const interests = [
    "I want to start trading",
    "I only want research alerts",
  ];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
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

  const sendOTP = async (phoneNumber) => {
    try {
      const url = "https://cpaas.messagecentral.com/verification/v3/send";
      const params = {
        countryCode: "91",
        flowType: "SMS",
        mobileNumber: phoneNumber,
        customerId: CUSTOMER_ID,
      };
      const response = await axios.post(url, null, {
        params,
        headers: { authToken: AUTH_TOKEN },
      });

      const id = response.data?.data?.verificationId;
      if (id) {
        setVerificationId(id);
        setShowOTPModal(true);
        setSubmitError("");
        setOtpSentMessage("OTP sent to your phone number!");
        toast.success("OTP sent successfully");
      } else {
        setSubmitError("Failed to send OTP");
        toast.error("Failed to send OTP");
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
          params: {
            countryCode: "91",
            mobileNumber: phoneNumber,
            verificationId,
            customerId: CUSTOMER_ID,
            code,
          },
          headers: { authToken: AUTH_TOKEN },
        }
      );

      const status = response.data?.data?.verificationStatus;
      if (
        response.data.responseCode === 200 &&
        status === "VERIFICATION_COMPLETED"
      ) {
        toast.success("OTP verified successfully!");
        setIsOTPVerified(true);
        setShowAllFields(true);
        setShowOTPModal(false);
        setOtp("");
        setOtpError("");
        setOtpSentMessage("");
      } else {
        setOtpError("Invalid OTP. Please try again.");
        toast.error("OTP verification failed");
      }
    } catch {
      setOtpError("Failed to validate OTP. Please try again.");
      toast.error("OTP validation error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(true)) return; // Only validate name and phone initially
    setIsSubmitting(true);
    await sendOTP(formData.phone);
    setIsSubmitting(false);
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

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(false)) return; // Validate all fields
    setIsSubmitting(true);

    try {
      await axios.post(
        "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
        {
          name: formData.name,
          phone: formData.phone,
          state: formData.state,
          language: formData.language,
          experience: formData.experience,
          market: formData.market || null,
          researchMarket: formData.researchMarket || null,
          platform: formData.platform,
          platformName: formData.platformName || null,
          interest: formData.interest,
        }
      );
      toast.success("Lead submitted successfully!");
      setSuccessMessage(
        "Successfully registered! Our team will reach out to you shortly to help you get started."
      );
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      setSubmitError("Failed to submit form. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (embedded) {
    return (
      <div className="w-full">
        <div className="w-full bg-[#f8f8f4] rounded-xl shadow-lg p-6 md:p-7 transition duration-300 relative overflow-hidden">
          {/* Form Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
            <img
              src={FormBg}
              alt='Form Background'
              className='w-full h-full object-cover opacity-30'
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-5 text-[#4a4a2e] tracking-wide drop-shadow-sm">
              Register
            </h2>

            {submitError && (
              <p className="text-red-500 text-sm text-center mb-3">{submitError}</p>
            )}

            {otpSentMessage && !successMessage && (
              <p className="text-green-500 text-sm text-center mb-3">{otpSentMessage}</p>
            )}

            {successMessage ? (
              <p className="text-green-600 text-center font-semibold text-lg">{successMessage}</p>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Full Name"
                      disabled={isSubmitting}
                      className={`w-full border ${errors.name ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field with Indian Flag */}
                  <div>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
                        <span className="text-xl">🇮🇳</span>
                        <span className="ml-1 text-sm text-gray-600">+91</span>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Your Contact Number"
                        disabled={isSubmitting}
                        className={`w-full border ${errors.phone ? "border-red-400" : "border-gray-300"
                          } rounded-md p-2.5 md:p-3 pl-20 md:pl-20 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Send OTP Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#124aad] text-[#eceae0] font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#093e9c] transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending OTP..." : "Send OTP"}
                  </button>
                </form>

                {/* OTP Verification Section */}
                {showOTPModal && (
                  <div className="mt-6 bg-white border border-gray-200 p-4 rounded-xl shadow-md">
                    <h3 className="text-blue-700 font-semibold text-center mb-3 text-sm md:text-base">Enter OTP</h3>
                    <form onSubmit={handleOTPSubmit} className="flex gap-3 items-start">
                      <input
                        type="text"
                        maxLength="6"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                        placeholder="Enter OTP"
                        className={`flex-1 border ${otpError ? "border-red-400" : "border-gray-300"
                          } rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                      />
                      <button
                        type="submit"
                        className="bg-[#124aad] text-[#eceae0] font-semibold py-2.5 px-4 rounded-md hover:bg-[#093e9c] transition duration-300 text-sm whitespace-nowrap"
                      >
                        Verify
                      </button>
                    </form>
                    {otpError && (
                      <p className="text-red-500 text-xs text-center mt-2">{otpError}</p>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowOTPModal(false)}
                      className="text-blue-600 text-xs text-center mt-2 hover:underline block w-full"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {/* All Fields Section - Show after OTP verification */}
                {showAllFields && (
                  <form onSubmit={handleFinalSubmit} className="mt-6 flex flex-col gap-3.5">
                    {/* Trading Experience Radio Buttons */}
                    <div className="space-y-2">
                      <label className="text-md font-large text-gray-700">Trading Experience</label>
                      <div className="flex flex-col sm:flex-row gap-4 mt-3">
                        {experiences.map((exp) => (
                          <label key={exp.value} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="experience"
                              value={exp.value}
                              checked={formData.experience === exp.value}
                              onChange={handleInputChange}
                              disabled={isSubmitting}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{exp.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.experience && (
                        <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
                      )}
                    </div>

                    {/* Interest Checkboxes */}
                    <div className="space-y-2">
                      <label className="text-md font-large text-gray-700">What are you interested in?</label>
                      <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        {interests.map((int) => (
                          <label key={int} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="interest"
                              value={int}
                              checked={formData.interest === int}
                              onChange={handleInputChange}
                              disabled={isSubmitting}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{int}</span>
                          </label>
                        ))}
                      </div>
                      {errors.interest && (
                        <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
                      )}
                    </div>

                    {/* Show trading market field only if user wants to start trading */}
                    {formData.interest === "I want to start trading" && (
                      <select
                        name="market"
                        value={formData.market}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full border ${errors.market ? "border-red-400" : "border-gray-300"
                          } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                      >
                        <option value="">Select Market you want to Trade in</option>
                        {markets.map((mkt) => (
                          <option key={mkt} value={mkt}>
                            {mkt}
                          </option>
                        ))}
                      </select>
                    )}
                    {formData.interest === "I want to start trading" && errors.market && (
                      <p className="text-red-500 text-xs mt-1">{errors.market}</p>
                    )}

                    {/* Show research market field only if user only wants research alerts */}
                    {formData.interest === "I only want research alerts" && (
                      <select
                        name="researchMarket"
                        value={formData.researchMarket}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full border ${errors.researchMarket ? "border-red-400" : "border-gray-300"
                          } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                      >
                        <option value="">Select Market you want to Research</option>
                        {markets.map((mkt) => (
                          <option key={mkt} value={mkt}>
                            {mkt}
                          </option>
                        ))}
                      </select>
                    )}
                    {formData.interest === "I only want research alerts" && errors.researchMarket && (
                      <p className="text-red-500 text-xs mt-1">{errors.researchMarket}</p>
                    )}

                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full border ${errors.state ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                    >
                      <option value="">Select State</option>
                      {states.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                    )}

                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full border ${errors.language ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                    >
                      <option value="">Select Language</option>
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                    {errors.language && (
                      <p className="text-red-500 text-xs mt-1">{errors.language}</p>
                    )}

                    {/* Trading Platform Radio Buttons */}
                    <div className="space-y-2">
                      <label className="text-md font-large text-gray-700">Do you use any trading platform?</label>
                      <div className="flex flex-col sm:flex-row gap-4 mt-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="platform"
                            value="Yes"
                            checked={formData.platform === "Yes"}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="platform"
                            value="No"
                            checked={formData.platform === "No"}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">No</span>
                        </label>
                      </div>
                      {errors.platform && (
                        <p className="text-red-500 text-xs mt-1">{errors.platform}</p>
                      )}
                    </div>

                    {/* Platform Name Field - Show only if Yes is selected */}
                    {formData.platform === "Yes" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          name="platformName"
                          value={formData.platformName || ""}
                          onChange={handleInputChange}
                          placeholder="Which platform do you use?"
                          disabled={isSubmitting}
                          className={`w-full border ${
                            errors.platformName ? "border-red-400" : "border-gray-300"
                          } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                        />
                        {errors.platformName && (
                          <p className="text-red-500 text-xs mt-1">{errors.platformName}</p>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#124aad] text-[#eceae0] font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#093e9c] transition duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="register" className="min-h-screen bg-[#eceae0] flex flex-col md:flex-row items-center justify-center pl-6 pr-2 md:pl-6 md:pr-2 py-12 gap-10">

      {/* LEFT SECTION (empty placeholder) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="md:w-1/2 flex flex-col items-center justify-center text-center space-y-6"
      />

      {/* RIGHT SECTION */}
      <div className="md:w-1/2 w-full bg-[#f8f8f4] rounded-xl shadow-lg p-6 md:p-7 transition duration-300 relative overflow-hidden">
        {/* Form Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
          <img
            src={FormBg}
            alt='Form Background'
            className='w-full h-full object-cover '
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-5 text-black tracking-wide drop-shadow-sm">
            Register
          </h2>

          {submitError && (
            <p className="text-red-500 text-sm text-center mb-3">{submitError}</p>
          )}

          {otpSentMessage && !successMessage && (
            <p className="text-green-500 text-sm text-center mb-3">
              {otpSentMessage}
            </p>
          )}

          {successMessage ? (
            <p className="text-green-600 text-center font-semibold text-lg">
              {successMessage}
            </p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    disabled={isSubmitting}
                    className={`w-full border ${errors.name ? "border-red-400" : "border-gray-300"
                      } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone Field with Indian Flag */}
                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
                      <span className="text-xl">🇮🇳</span>
                      <span className="ml-1 text-sm text-gray-600">+91</span>
                    </div>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Your Contact Number"
                      disabled={isSubmitting}
                      className={`w-full border ${errors.phone ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 pl-20 md:pl-24 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Send OTP Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#3b3b27] transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending OTP..." : "Send OTP"}
                </button>
              </form>

              {/* OTP Verification Section */}
              {showOTPModal && (
                <div className="mt-6 bg-white border border-gray-200 p-4 rounded-xl shadow-md">
                  <h3 className="text-blue-700 font-semibold text-center mb-3 text-sm md:text-base">Enter OTP</h3>
                  <form onSubmit={handleOTPSubmit} className="flex gap-3 items-start">
                    <input
                      type="text"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                      placeholder="Enter OTP"
                      className={`flex-1 border ${otpError ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                    />
                    <button
                      type="submit"
                      className="bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 px-4 rounded-md hover:bg-[#3b3b27] transition duration-300 text-sm whitespace-nowrap"
                    >
                      Verify
                    </button>
                  </form>
                  {otpError && (
                    <p className="text-red-500 text-xs text-center mt-2">{otpError}</p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowOTPModal(false)}
                    className="text-blue-600 text-xs text-center mt-2 hover:underline block w-full"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* All Fields Section - Show after OTP verification */}
              {showAllFields && (
                <form onSubmit={handleFinalSubmit} className="mt-6 flex flex-col gap-3.5">
                  {/* Trading Experience Radio Buttons */}
                  <div className="space-y-2">
                    <label className="text-md font-large text-gray-700">Trading Experience</label>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                      {experiences.map((exp) => (
                        <label key={exp.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="experience"
                            value={exp.value}
                            checked={formData.experience === exp.value}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{exp.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.experience && (
                      <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
                    )}
                  </div>

                  {/* Interest Checkboxes */}
                  <div className="space-y-2">
                    <label className="text-md font-large text-gray-700">What are you interested in?</label>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                      {interests.map((int) => (
                        <label key={int} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="interest"
                            value={int}
                            checked={formData.interest === int}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{int}</span>
                        </label>
                      ))}
                    </div>
                    {errors.interest && (
                      <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
                    )}
                  </div>

                  {/* Show trading market field only if user wants to start trading */}
                  {formData.interest === "I want to start trading" && (
                    <select
                      name="market"
                      value={formData.market}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full border ${errors.market ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                    >
                      <option value="">Select Market you want to Trade in</option>
                      {markets.map((mkt) => (
                        <option key={mkt} value={mkt}>
                          {mkt}
                        </option>
                      ))}
                    </select>
                  )}
                  {formData.interest === "I want to start trading" && errors.market && (
                    <p className="text-red-500 text-xs mt-1">{errors.market}</p>
                  )}

                  {/* Show research market field only if user only wants research alerts */}
                  {formData.interest === "I only want research alerts" && (
                    <select
                      name="researchMarket"
                      value={formData.researchMarket}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={`w-full border ${errors.researchMarket ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                    >
                      <option value="">Select Market you want to Research</option>
                      {markets.map((mkt) => (
                        <option key={mkt} value={mkt}>
                          {mkt}
                        </option>
                      ))}
                    </select>
                  )}
                  {formData.interest === "I only want research alerts" && errors.researchMarket && (
                    <p className="text-red-500 text-xs mt-1">{errors.researchMarket}</p>
                  )}

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full border ${errors.state ? "border-red-400" : "border-gray-300"
                      } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                  >
                    <option value="">Select State</option>
                    {states.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}

                  {/* Language Dropdown */}
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full border ${errors.language ? "border-red-400" : "border-gray-300"
                      } rounded-md p-2.5 md:p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none`}
                  >
                    <option value="">Select Language</option>
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                  {errors.language && (
                    <p className="text-red-500 text-xs mt-1">{errors.language}</p>
                  )}

                  {/* Trading Platform Radio Buttons */}
                  <div className="space-y-2">
                    <label className="text-md font-large text-gray-700">Do you use any trading platform?</label>
                    <div className="flex flex-col sm:flex-row gap-4 mt-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="platform"
                          value="Yes"
                          checked={formData.platform === "Yes"}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="platform"
                          value="No"
                          checked={formData.platform === "No"}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">No</span>
                      </label>
                    </div>
                    {errors.platform && (
                      <p className="text-red-500 text-xs mt-1">{errors.platform}</p>
                    )}
                  </div>

                  {/* Platform Name Field - Show only if Yes is selected */}
                  {formData.platform === "Yes" && (
                    <div className="mt-3">
                      <input
                        type="text"
                        name="platformName"
                        value={formData.platformName || ""}
                        onChange={handleInputChange}
                        placeholder="Which platform do you use?"
                        disabled={isSubmitting}
                        className={`w-full border ${
                          errors.platformName ? "border-red-400" : "border-gray-300"
                        } rounded-md p-2.5 md:p-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none`}
                      />
                      {errors.platformName && (
                        <p className="text-red-500 text-xs mt-1">{errors.platformName}</p>
                      )}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4a4a2e] text-[#eceae0] font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#3b3b27] transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
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
