import React from 'react'

const HeroMobile = ({ className = '', onConsultationClick }) => (
  <section
    className={`block sm:hidden w-full relative overflow-hidden ${className}`}
    aria-label="Seeds of Innocens hero mobile"
  >
    <div className="relative h-[360px] w-full">
      <img
        src="/book-free-appointment/Images/Banner01.png"
        alt="Happy family banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white space-y-4">
        <p className="text-sm uppercase tracking-widest text-white/80">India’s trusted IVF network</p>
        <h2 className="text-2xl font-bold leading-snug">
        Seeds of Innocens IVF Centre <br /> India’s Best Fertility Clinic
        </h2>
        <p className="text-base text-white/90">
          Expert fertility specialists, zero-cost EMI options, and end-to-end care for your parenthood journey.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onConsultationClick}
            className="flex-1 min-w-[140px] rounded-lg bg-[#C62828] px-4 py-3 text-sm font-semibold text-white shadow-md"
          >
            Book Free Consultation
          </button>
          {/* <a
            href="tel:+919810350512"
            className="flex-1 min-w-[120px] rounded-lg border border-white/40 px-4 py-3 text-center text-sm font-semibold text-white"
            aria-label="Call Seeds of Innocens"
          >
            Call Now
          </a> */}
        </div>
      </div>
    </div>
    <div className="bg-[#c6282842] px-6 py-5 shadow-sm">
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-2xl font-extrabold text-[#C62828]">20K+</p>
          <p className="text-sm text-gray-600">Happy Families</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold text-[#C62828]">78%</p>
          <p className="text-sm text-gray-600">Success Rate*</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold text-[#C62828]">35+</p>
          <p className="text-sm text-gray-600">Clinics Nationwide</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold text-[#C62828]">30+</p>
          <p className="text-sm text-gray-600">Specialists</p>
        </div>
      </div>
      {/* <div className="mt-5 flex flex-col gap-3">
        <a
          href="https://wa.me/919810350512"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3 text-sm font-semibold text-[#0f5132]"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/book-free-appointment/Images/whatsapp_PNG20 1.webp"
            alt="WhatsApp icon"
            className="h-5 w-5 object-contain"
            loading="lazy"
          />
          Chat on WhatsApp
        </a>
        <p className="text-center text-xs text-gray-500">
          Zero-cost EMI • 24x7 Support • Confidential Counselling
        </p>
      </div> */}
    </div>
  </section>
)

export default HeroMobile