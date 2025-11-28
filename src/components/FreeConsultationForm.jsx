import React, { useState } from 'react'

const API_BASE_URL = 'http://localhost:4000';

const FreeConsultationForm = ({
  onClose = null,
  leadSource = "Website Form"
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    mobileNumber: '',
    state: '',
    centre: '',
    treatmentPreference: '',
    tryingDuration: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const stateCentreMap = {
    'Delhi NCR': ['Malviya Nagar', 'Janakpuri', 'Pitampura', 'Faridabad', 'Gurugram', 'Ghaziabad'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Kanpur', 'Gorakhpur', 'Ghaziabad', 'Meerut'],
    'Bihar': ['Patna', 'Muzaffarpur'],
    'Kerala': ['Kochi', 'Kasaragod'],
    'Uttarakhand': ['Haldwani'],
    'Assam': ['Guwahati'],
    'Jharkhand': ['Ranchi'],
    'West Bengal': ['Kolkata'],
    'Jammu and Kashmir': ['Srinagar'],
  }
  const stateOptions = Object.keys(stateCentreMap)
  const centreOptions = formData.state ? stateCentreMap[formData.state] || [] : [];
  // const serviceOptions = ['IUI, IVF & ICSI', 'Donor Programs', 'Male Fertility', 'Female Fertility', 'Genetic Testing'];
  const treatmentOptions = ['IVF', 'IUI', 'ICSI', 'Fertility evaluation', 'Not sure'];
  const durationOptions = ['Less than 1 year', '1–3 years', 'More than 3 years', 'Not sure'];

  const isPhoneValid = (raw) => {
    const digits = (raw || '').replace(/\D/g, '');
    if (digits.length !== 10) return false;
    return /^[6-9]/.test(digits);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobileNumber: digitsOnly }));
      if (!phoneTouched) setPhoneTouched(true);
      return;
    }
    if (name === 'state') {
      setFormData(prev => ({ ...prev, state: value, centre: '' }));
      return
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      isPhoneValid(formData.mobileNumber) &&
      formData.city &&
      formData.state &&
      formData.centre &&
      formData.treatmentPreference &&
      formData.tryingDuration
    )
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    try {
      const normalizedSource = (leadSource || '').trim() || 'Google ads';
      const submissionPayload = { 
        firstName: formData.fullName.split(' ')[0] || formData.fullName,
        lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
        phone: formData.mobileNumber,
        city: formData.city,
        state: formData.state,
        centre: formData.centre,
        treatmentPreference: formData.treatmentPreference,
        tryingDuration: formData.tryingDuration,
        source: normalizedSource 
      };

      const resp = await fetch(
        `${API_BASE_URL.replace(/\/$/, '')}/api/website-bookings`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionPayload)
        }
      );

      const data = await resp.json();

      if (data?.duplicate) {
        setIsDuplicate(true);
        return;
      }
      if (!resp.ok || !data?.ok) throw new Error(data?.error || 'LeadSquared error');

      // ✅ Trigger Google Ads Conversion Tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-719316761/8ZHfCOTPlbobEJnO_9YC',
        });
        console.log("✅ Google Ads Conversion Event Fired");
      }

      setIsSubmitted(true);

      // Auto-refresh after 5 seconds
      setTimeout(() => {
        window.location.reload();
      }, 5000);

    } catch (err) {
      console.error('Form submission failed:', err);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8 relative">
      {typeof onClose === 'function' && (
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-900 cursor-pointer flex items-center justify-center text-2xl"
        >
          ×
        </button>
      )}

      <h2 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
      Start Your Fertility Journey – Get a Free Consultation
      </h2>

      <p className="text-base sm:text-sm font-semibold text-gray-800 mb-6 text-center">
      Share your details and our fertility expert will reach out soon. 
      </p>

      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name*"
                required
                className="w-full rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city name*"
                required
                className="flex-1 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number*"
                required
                inputMode="numeric"
                maxLength={10}
                className="flex-1 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {phoneTouched && !isPhoneValid(formData.mobileNumber) && (
              <p className="text-xs text-red-500 mt-1">
                Kindly provide a valid mobile number
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="rounded-md border border-gray-300 text-gray-900 px-3 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="" disabled>Select State*</option>
                {stateOptions.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <select
                name="centre"
                value={formData.centre}
                onChange={handleInputChange}
                required
                disabled={!formData.state}
                className={`rounded-md border border-gray-300 text-gray-900 px-3 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${!formData.state ? 'bg-gray-100 cursor-not-allowed' : ''}`}
              >
                <option value="" disabled>
                  {formData.state ? 'Select Centre*' : 'Select State first'}
                </option>
                {centreOptions.map((centre) => (
                  <option key={centre} value={centre}>
                    {centre}
                  </option>
                ))}
              </select>

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                What treatment are you looking for?
              </label>
              <select
                name="treatmentPreference"
                value={formData.treatmentPreference}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="" disabled>Select an option*</option>
                {treatmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                How long have you been trying to conceive?
              </label>
              <select
                name="tryingDuration"
                value={formData.tryingDuration}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="" disabled>Select an option*</option>
                {durationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full inline-flex items-center justify-center rounded-md text-white font-semibold tracking-wide py-3 transition-colors ${
                isFormValid()
                  ? 'bg-[#C62828] hover:bg-[#C62828]/90 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Book Appointment
            </button>
          </form>

          <p className="text-sm text-gray-700 mt-4 text-center">
          Zero-interest EMI options available. Just ask us.
          </p>

          {isDuplicate && (
            <p className="mt-2 text-sm text-red-500 text-center">
              You have already submitted.
            </p>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <svg className="h-14 w-14 mb-4 text-green-500" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#d2f5df" />
            <path stroke="#029861" strokeWidth="2.5" fill="none" d="M8 12.5l3 3 5-5" />
          </svg>
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            Thank you for contacting us!
          </h3>
          <p className="text-base text-gray-700 text-center">
            Your details have been received.<br />Our team will reach out to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default FreeConsultationForm;

