'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  CheckIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function LicensePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#1D3c34]">
      <main className="relative isolate">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-green-900 px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                    className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                  />
                  <div className="absolute inset-0 bg-green-900 mix-blend-multiply" />
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                  >
                    <div
                      style={{
                        clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                      className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#1D3c34] to-[#776fff] opacity-40"
                    />
                  </div>
                  <figure className="relative isolate">
                    <svg
                      fill="none"
                      viewBox="0 0 162 128"
                      aria-hidden="true"
                      className="absolute -top-4 -left-2 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        id="0ef284b8-28c2-426e-9442-8655d393522e"
                      />
                      <use x={86} href="#0ef284b8-28c2-426e-9442-8655d393522e" />
                    </svg>
                    <img
                      alt="MarketGrowth"
                      src="/brand/mg-icon-white.svg"
                      className="h-8 w-auto"
                    />
                    <blockquote className="mt-6 text-lg/8 text-white">
                      <p>
                        “MarketGrowth&apos;s commitment to the success of our agency owners and our customers is core to our mission.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm/6 text-gray-300">
                      <strong className="font-semibold text-white">Victor Ramayrat,</strong> Founder at MarketGrowth
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div>
                <div className="text-base/7 text-gray-700 lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-[#f5f5f5]">License terms</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#f5f5f5] sm:text-5xl">
                    On a mission to empower our agency owners
                  </h1>
                  <div className="max-w-xl">
                    <p className="mt-6 text-[#f5f5f5]">
                        <strong>1. Grant of License</strong><br /><br />
                        Licensor hereby grants to Licensee a non-transferable, non-sublicensable, revocable license to operate under the MarketGrowth CX brand and use the Licensor&apos;s intellectual property, including trademarks, workflows, templates, training materials, and systems, solely within the approved territory and in accordance with the terms of this Agreement.<br /><br />

                        <strong>2. License Fee and Royalties</strong><br /><br />

                        Licensee agrees to pay an upfront licensing fee of $10,000 upon execution of this Agreement.

                        Licensee shall also pay monthly royalties of either 8% of gross revenue or $1,000 flat, due on the first of each month.<br /><br />

                        <strong>3. Term and Termination</strong><br /><br />

                        The term of this Agreement shall be two (2) years, renewable upon mutual agreement.

                        Either party may terminate this Agreement with thirty (30) days&apos; written notice for material breach, provided such breach is not cured within the notice period.

                        Upon termination, Licensee shall immediately cease use of all Licensor IP and return or destroy all proprietary materials.<br /><br />

                        <strong>4. Obligations of the Licensee</strong><br /><br />

                        Licensee understands and agrees that they are only licensing the MarketGrowth CX brand and related intellectual property, and must operate their agency as an independent entity. Licensee is responsible for forming and maintaining their own legal business entity in accordance with applicable laws and regulations. Licensee shall not represent themselves as a subsidiary, employee, or partner of MarketGrowth CX LLC.<br /><br />
                        Licensee agrees to:<br /><br />

                        1. Operate within the assigned territory or niche as approved<br />

                        2. Maintain brand consistency and follow brand guidelines<br />

                        3. Use only approved platforms and tools unless otherwise agreed<br />

                        4. Submit monthly reports and revenue statements to Licensor<br />

                        5. Avoid actions that may damage the reputation of MarketGrowth<br /><br />

                        <strong>5. Obligations of the Licensor</strong><br /><br />

                        Licensor agrees to:<br /><br />

                        1. Provide onboarding and training to Licensee<br />

                        2. Deliver brand assets, automation playbooks, templates, and microsite setup<br />

                        3. Offer ongoing support, coaching, and inclusion in the licensee network<br /><br />

                        <strong>6. Intellectual Property</strong><br /><br />

                        All brand assets, trademarks, documents, workflows, and other proprietary content remain the exclusive property of the Licensor. The Licensee is granted limited usage rights during the term of this Agreement only.<br /><br />

                        <strong>7. Confidentiality</strong><br /><br />

                        Licensee agrees to maintain the confidentiality of all proprietary information and not disclose or reproduce such content except as required for license operations.<br /><br />

                        <strong>8. Indemnification</strong><br /><br />

                        Each party agrees to indemnify and hold harmless the other party from any claims, losses, or liabilities arising out of their respective performance or conduct under this Agreement.<br /><br />

                        Furthermore, Licensee agrees that Licensor shall not be liable for any obligations, liabilities, or representations made by Licensee in the course of its business operations. Licensee shall be solely responsible for its own contracts, clients, taxes, employee or contractor relationships, and all other aspects of its operations. Licensor shall not be held responsible for any damages, losses, disputes, or legal actions arising out of Licensee’s activities, omissions, or failures to comply with applicable laws or third-party agreements.<br /><br />

                        <strong>9. Governing Law & Dispute Resolution</strong><br /><br />

                        This Agreement shall be governed by the laws of the State of California. Any disputes arising under this Agreement shall be resolved first through good faith negotiation, and if unresolved, through binding arbitration in California.<br /><br />

                        <strong>10. Entire Agreement</strong><br /><br />

                        This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements. Any amendments must be made in writing and signed by both parties.
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex">
                  <a href="mailto:victor@marketgrowth.io" className="text-base/7 font-semibold text-[#f5f5f5]">
                    Learn more about licensing <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
 