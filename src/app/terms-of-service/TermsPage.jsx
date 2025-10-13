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

export default function TermsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#082523]">
      <main className="relative isolate">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4 hidden sm:block">
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
                    <blockquote className="mt-6 text-xl/8 text-white">
                      <p className="text-[#F5F5F5] mt-4">
                        “MarketGrowth&apos;s commitment to the success of our agency owners and our customers is core to our mission.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm/6 text-gray-300">
                      <strong className="font-semibold text-white">Victor Ramayrat,</strong> Founder at MarketGrowth
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="text-base/7 text-gray-700 lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-[#f5f5f5]">Legal</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#f5f5f5] text-[#f5f5f5] sm:text-5xl">
                    Terms of Service
                  </h1>
                  <p className="text-[#F5F5F5] mt-4"><strong>Effective Date:</strong> January 1, 2025<br /><strong>Last Updated:</strong> April 30, 2025<br />__</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">Overview</h3>
                  <p className="text-[#F5F5F5] mt-4">These Terms of Service (“Terms”) outline the rules and regulations for using this platform. By accessing or using MarketGrowth.io you agree to comply with these Terms. If you do not agree, please refrain from using the platform.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">1. Acceptance of Terms</h3>
                  <p className="text-[#F5F5F5] mt-4">By creating an account or otherwise using MarketGrowth.io, you affirm that you are at least 18 years of age and have the legal authority to agree to these Terms. If you are using the platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">2. Account Registration and Security</h3>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>2.1 Registration Requirements:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">To access certain features, you may need to create an account. You agree to provide accurate, complete, and up-to-date information during registration and to update such information as necessary.</p>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>2.2 Account Security:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. Notify us immediately of any unauthorized access or use of your account.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">3. Permitted Use</h3>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>3.1 Community Standards:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">MarketGrowth.io is a professional community. By using the platform, you agree to:</p>
                  <ul className="text-[#f5f5f5] mt-4 list-disc pl-4"><li>Treat others with respect and professionalism.</li>

                  <li>Avoid posting harmful, harassing, or offensive content.</li>

                  <li>Comply with applicable laws and regulations.</li>

                  <li>Adhere to the <a href="/community-guidelines">Community Guidelines</a></li></ul>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>3.2 Prohibited Activities:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">You agree not to:</p>
                  <ul className="text-[#f5f5f5] mt-4 list-disc pl-4"><li>Misrepresent your identity or qualifications.</li>

                  <li>Use the platform for illegal, deceptive, or harmful purposes.</li>

                  <li>Disrupt or harm the platform&apos;s functionality or other users&apos; experiences.</li></ul>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">4. Content Ownership and Use</h3>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>4.1 User Content:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">You retain ownership of any content you submit, post, or share on MarketGrowth.io. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content to provide and improve our services.</p>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>4.2 Platform Content:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">All content provided by MarketGrowth.io, including text, graphics, and software, is the property of MarketGrowth.io and is protected by intellectual property laws. You may not reproduce, distribute, or modify any platform content without prior written consent.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">5. Privacy</h3>
                  <p className="text-[#F5F5F5] mt-4">Your use of MarketGrowth.io is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the platform, you consent to the terms of the Privacy Policy.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">6. Termination of Use</h3>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>6.1 By You:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">You may terminate your account at any time by contacting us at support@marketgrowth.io.</p><h4 class="text-[#f5f5f5] mt-6"><strong>6.2 By MarketGrowth.io:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">We reserve the right to suspend or terminate your account if you violate these Terms or engage in behavior detrimental to the platform or its users.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">7. Disclaimers and Limitation of Liability</h3>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>7.1 Disclaimers:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">MarketGrowth.io is provided “as is” without warranties of any kind, either express or implied. We do not guarantee the accuracy or reliability of platform content or user interactions.</p>
                  <h4 class="text-[#f5f5f5] mt-6"><strong>7.2 Limitation of Liability:</strong></h4>
                  <p className="text-[#F5F5F5] mt-4">To the fullest extent permitted by law, MarketGrowth.io and its affiliates will not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">8. Indemnification</h3>
                  <p className="text-[#F5F5F5] mt-4">You agree to indemnify and hold MarketGrowth.io harmless from any claims, liabilities, damages, or expenses (including reasonable attorney&apos;s fees) arising from your use of the platform or violation of these Terms.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">9. Changes to These Terms</h3>
                  <p className="text-[#F5F5F5] mt-4">We may update these Terms periodically to reflect changes in our practices or for legal, regulatory, or operational reasons. Continued use of the platform after changes are posted constitutes acceptance of the updated Terms.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">10. Governing Law and Dispute Resolution</h3>
                  <p className="text-[#F5F5F5] mt-4">These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes will be resolved exclusively in the state or federal courts located in California.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">11. Affiliate and Advertising disclosure</h3>
                  <p className="text-[#F5F5F5] mt-4">We always aim to provide unbiased editorial created by our writers and contributors. We also need to pay our teams and website costs so we make money in a number of ways. We sometimes use affiliate links to products and services on retailer sites for which we can receive compensation if you click on those links or make purchases through them.</p>
                  <h3 className="text-[#F5F5F5] mt-6 text-xl font-semibold">12. Contact Us</h3>
                  <p className="text-[#F5F5F5] mt-4">If you have questions about these Terms, please contact us at:</p>
                  <p className="text-[#F5F5F5] mt-4"><strong>MarketGrowth CX LLC</strong><br />1401 21st Street<br />Sacramento, CA 95811<br /><strong>Email:</strong> <a href="mailto:support@marketgrowth.io">support@marketgrowth.io</a></p>
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
 