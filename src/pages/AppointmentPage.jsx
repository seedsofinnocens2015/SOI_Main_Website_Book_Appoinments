import React, { useState, Suspense } from 'react'
const HeroMobile = React.lazy(() => import('../components/HeroMobile'))
const FloatingConsultButton = React.lazy(() => import('../components/FloatingConsultButton'))
const FreeConsultationForm = React.lazy(() => import('../components/FreeConsultationForm'))


const AppointmentPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false)

  return (
    <>
      {/* Header Component */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <img
              src="/book-free-appointment/Images/SOILogo.webp"
              alt="Seeds of Innocens IVF logo"
              className="h-8 sm:h-12 w-auto"
            />
          </a>

          {/* Right side buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919810350512"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <img
                src="/book-free-appointment/Images/whatsapp_PNG20 1.webp"
                alt="WhatsApp"
                className="w-8 h-8 object-contain"
              />
            </a>

            {/* Phone Button */}
            <a
              href="tel:+919810350512"
              className="flex items-center justify-center w-12 h-12"
              aria-label="Call us"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z" stroke="#C62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </a>

            {/* Book Appointment Button */}
            <button
              onClick={() => setIsConsultationFormOpen(true)}
              className="bg-[#C62828] text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-md"
            >
              Book Appointment
            </button>
          </div>
          {/* Quick actions - Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/919810350512"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15"
              aria-label="WhatsApp"
            >
              <img
                src="/book-free-appointment/Images/whatsapp_PNG20 1.webp"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </a>
            <a
              href="tel:+919810350512"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200"
              aria-label="Call us"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"
                  stroke="#C62828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <button
              onClick={() => setIsConsultationFormOpen(true)}
              className="rounded-full bg-[#C62828] px-4 py-2 text-xs font-semibold text-white shadow-sm"
            >
              Book
            </button>
          </div>
        </div>
      </header>

      <div className="pt-[70px] sm:pt-[80px] pb-15 sm:pb-0">
        {/* Hero Component - Mobile */}
        <Suspense fallback={null}>
          <HeroMobile className="sm:hidden" onConsultationClick={() => setIsConsultationFormOpen(true)} />
        </Suspense>

        {/* Hero Section - Desktop */}
        {/* Show desktop/tablet hero only on sm+ screens */}
        <section className="relative hidden sm:block w-full min-h-[500px] sm:h-[480px] lg:h-[620px]" aria-label="Hero">
          <img
            src="/book-free-appointment/Images/Banner.png"
            alt="Happy family banner"
            className="absolute inset-0 h-[480px] sm:h-[620px] w-full object-cover"
          />
          <div className="absolute left-4 right-4 sm:left-20 sm:right-auto top-8 sm:top-30 flex justify-center sm:justify-start">
            <Suspense fallback={null}>
              <div className="p-6 lg:p-8 xl:p-10 flex flex-col justify-center text-white bg-black/80 rounded-lg">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                  Seeds of Innocens IVF Centre <br /> India’s Best Fertility Clinic
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8">
                  Get Zero Interest EMI Plans*. Book a Free Consultation today!
                </p>
                <button
                  onClick={() => setIsConsultationFormOpen(true)}
                  className="bg-[#C62828] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-md font-semibold text-base lg:text-lg transition-colors w-fit cursor-pointer"
                >
                  Get Consultation
                </button>
              </div>
            </Suspense>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full bg-[#c6282842] py-12 sm:py-16 lg:py-20 hidden sm:block">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 lg:gap-8">
              {/* Stat 1 */}
              <div className="text-center flex-1 w-full sm:w-auto">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#C62828] mb-3 leading-none">
                  20,000+
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 font-semibold">Successful Pregnancies</p>
              </div>

              {/* Divider 1 */}
              <div className="hidden sm:block w-px h-20 bg-gray-400 flex-shrink-0"></div>
              <div className="sm:hidden w-full h-px bg-gray-400"></div>

              {/* Stat 2 */}
              <div className="text-center flex-1 w-full sm:w-auto">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#C62828] mb-3 leading-none">
                  35+
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 font-semibold">Centres Across India</p>
              </div>

              {/* Divider 2 */}
                <div className="hidden sm:block w-px h-20 bg-gray-400 flex-shrink-0"></div>
              <div className="sm:hidden w-full h-px bg-gray-400"></div>

              {/* Stat 3 */}
              <div className="text-center flex-1 w-full sm:w-auto">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#C62828] mb-3 leading-none">
                  30+
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 font-semibold">Expert Doctors</p>
              </div>

              {/* Divider 3 */}
              <div className="hidden sm:block w-px h-20 bg-gray-400 flex-shrink-0"></div>
              <div className="sm:hidden w-full h-px bg-gray-400"></div>

              {/* Stat 4 */}
              <div className="text-center flex-1 w-full sm:w-auto">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#C62828] mb-3 leading-none">
                  78%
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 font-semibold">Success Rate*</p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Consultation Form Section */}
        <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Suspense fallback={null}>
              <FreeConsultationForm />
            </Suspense>
          </div>
        </section>

        {/* IVF Knowledge Section */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Overview */}
            <article className="bg-[#fff7f7] border border-[#f5dada] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#C62828] mb-4">
                In-Vitro Fertilization (IVF) Overview
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                IVF supports couples facing complex fertility challenges. Mature eggs are gently retrieved,
                combined with partner sperm inside a controlled lab, monitored as embryos form, and then
                transferred back into the uterus a few days later to begin pregnancy.
              </p>
            </article>

            {/* Why + Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#C62828] mb-4">
                  Why is IVF Done?
                </h3>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  Specialists recommend IVF when other treatments cannot overcome:
                </p>
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
                  {[
                    'Blocked or damaged fallopian tubes',
                    'Endometriosis or ovulation disorders',
                    'Low sperm count or motility',
                    'Repeated IUI/infertility treatment failures',
                    'Completely unexplained infertility',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[#C62828] mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#C62828] mb-4">
                  Key Steps in an IVF Cycle
                </h3>
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
                  {[
                    'Ovarian stimulation boosts egg count.',
                    'Eggs are collected via a quick, guided procedure.',
                    'Sperm sample (or TESA) is prepared in the lab.',
                    'Fertilization happens naturally or through ICSI.',
                    'Embryos grow under embryologist supervision.',
                    'Select embryos (blastocysts) are transferred.',
                    'A pregnancy test follows about two weeks later.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[#C62828] mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Benefits / Risks / Cost */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#C62828] mb-4">
                  Benefits of IVF
                </h3>
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
                  {[
                    'Higher pregnancy odds when other methods fail.',
                    'Addresses multiple infertility causes at once.',
                    'PGT screens embryos to avoid genetic issues.',
                    'Freeze eggs or sperm to plan parenthood later.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[#C62828] mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#C62828] mb-4">
                  IVF Risks & Complications
                </h3>
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
                  {[
                    'Higher chance of twins or multiples.',
                    'Rare ectopic pregnancy or OHSS.',
                    'Possible preterm birth / low birth weight.',
                    'Miscarriage risk similar to natural conceptions.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[#C62828] mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#C62828] mb-4">
                  IVF Cost Snapshot
                </h3>
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
                  {[
                    'Varies by protocol, medicines, lab tech, and city.',
                    'PGT or advanced tests add to cost but improve clarity.',
                    'Financing and EMI support available for every couple.',
                    'Transparent counselling keeps you informed throughout.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[#C62828] mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Why Choose Seeds */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Affordable IVF Care',
                  desc:
                    'Tailored packages, transparent costs, and zero-cost EMI options ease the financial journey.',
                },
                {
                  title: 'Fetal Medicine',
                  desc:
                    'Dedicated fetal scans, echo and diagnostics such as CVS or amnio protect maternal-fetal health.',
                },
                {
                  title: 'Clinical Genetics Support',
                  desc:
                    'Genetic counsellors map family history, explain PGT results, and guide next steps with clarity.',
                },
                {
                  title: 'In-House Genetic Lab',
                  desc:
                    'PGT-A and advanced testing run inside our own lab to speed timelines and boost implantation chances.',
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="bg-[#fff7f7] border border-[#f5dada] rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-[#C62828] mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#C62828] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm sm:text-base text-center mb-4">
              Disclaimer: By submitting the form you agree to be contacted by Seeds of Innocens IVF and associate partners through Email/Call/SMS/Whatsapp and other communications mediums.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#" className="hover:underline">T&C Apply</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Disclaimer</a>
            </div>
          </div>
        </footer>

        {/* Consultation Form Modal */}
        {isConsultationFormOpen && (
          <div className="fixed inset-0 z-[9999]">
            <div onClick={() => setIsConsultationFormOpen(false)} className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4 overflow-y-auto">
              <div className="relative w-full max-w-lg my-8">
                <Suspense fallback={null}>
                  <FreeConsultationForm onClose={() => setIsConsultationFormOpen(false)} />
                </Suspense>
              </div>
            </div>
          </div>
        )}

        {/* Floating Consult Button */}
        <Suspense fallback={null}>
          <FloatingConsultButton />
        </Suspense>
      </div>
    </>
  )
}

export default AppointmentPage
