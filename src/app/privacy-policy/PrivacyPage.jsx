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

export default function PrivacyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#05261E]">
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
                    <blockquote className="mt-6 text-lg/8 text-white">
                      <p className="text-[#f5f5f5] mt-4">
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
                  <p className="text-base/7 font-semibold text-[#f5f5f5]">Legal</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#f5f5f5] text-[#f5f5f5] sm:text-5xl">
                    Privacy Policy
                  </h1>
                  <div className="max-w-xl">
                    <p className="text-[#f5f5f5] mt-4"><strong>Effective Date:</strong> January 1, 2025<br /><strong>Last Updated:</strong> April 30, 2025</p><p className="text-[#f5f5f5] mt-4">__</p>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Introduction</strong></h3>
                    <p className="text-[#f5f5f5] mt-4">Welcome to MarketGrowth.io, a digital experience and AI Studio for founders, GTM and sales professionals. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our platform. By accessing or using MarketGrowth.io, you agree to the terms of this Privacy Policy.</p>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Information We Collect</strong></h3>
                    <p className="text-[#f5f5f5] mt-4">We collect information to provide a better experience for our users and to improve our community services. The types of information we may collect include:</p>
                    <h4 className="text-[#f5f5f5] mt-6 mb-6"><strong>1. Information You Provide to Us:</strong></h4>
                    <ul className="list-disc pl-4 mt-6 text-[#f5f5f5]"><li className="mb-2"><strong>Account Information:</strong> When you sign up, we collect personal details such as your name, email address, phone number, and professional credentials.</li>

                    <li className="mb-2"><strong>Profile Information:</strong> Information you choose to add to your profile, including your bio, photo, and areas of expertise.</li>

                    <li className="mb-2"><strong>Communication Data:</strong> Messages, feedback, or inquiries you send us via the platform or email.</li></ul>
                    <h4 className="text-[#f5f5f5] mt-6 mb-6"><strong>2. Information We Collect Automatically:</strong></h4>
                    <ul className="list-disc pl-4 mt-6 text-[#f5f5f5]">
                      <li className="mb-2"><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>

                    <li className="mb-2"><strong>Usage Data:</strong> Pages you visit, time spent on the platform, and actions you take, such as liking or commenting on posts.</li>

                    <li className="mb-2"><strong>Cookies and Similar Technologies:</strong> Data collected through cookies to improve your user experience. </li></ul>
                    <h4 className="text-[#f5f5f5] mt-6 mb-6"><strong>3. Information from Third Parties:</strong></h4>
                    <ul className="list-disc pl-4 mt-6 text-[#f5f5f5]"><li className="mb-2">Information obtained from service providers or partners to enhance your experience.</li></ul>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>How We Use Your Information</strong></h3><p className="text-[#f5f5f5] mt-4">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-4 mt-6 text-[#f5f5f5]"><li className="mb-2"><strong>To Provide Services:</strong> Enable you to create an account, access resources, and participate in the community.</li>

                    <li className="mb-2"><strong>To Personalize Your Experience:</strong> Tailor content, recommendations, and interactions to your preferences.</li>

                    <li className="mb-2"><strong>To Improve the Platform:</strong> Analyze usage patterns, troubleshoot issues, and enhance our features.</li>

                    <li className="mb-2"><strong>To Communicate with You:</strong> Send notifications, updates, and promotional materials related to Gather.</li>

                    <li className="mb-2"><strong>To Ensure Security:</strong> Detect and prevent fraud, unauthorized access, and other potential security issues.</li>

                    <li className="mb-2"><strong>To Comply with Legal Obligations:</strong> Fulfill regulatory requirements or respond to lawful requests.</li></ul>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>How We Share Your Information</strong></h3>
                    <p className="text-[#f5f5f5] mt-4">We do not sell or rent your personal information. However, we may share it in the following circumstances:</p>
                    <ul className="list-disc pl-4 mt-6 text-[#f5f5f5]"><li className="mb-2"><strong>With Other Users:</strong> Limited profile information, such as your name and bio, may be visible to other members of the community.</li>

                    <li className="mb-2"><strong>With Service Providers:</strong> Third-party vendors that assist us in providing the platform&apos;s services, such as hosting or analytics tools.</li>

                    <li className="mb-2"><strong>For Legal Reasons:</strong> To comply with applicable laws, regulations, or legal processes.</li>

                    <li className="mb-2"><strong>In Case of Business Transfers:</strong> If MarketGrowth.io undergoes a merger, acquisition, or sale, your information may be transferred to the new entity.</li></ul>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Your Choices and Rights</strong></h3>
                    <p className="text-[#f5f5f5] mt-4">You have control over your personal information and can exercise the following rights:</p>
                    <ul className="list-disc pl-4 mt-6 text-[#f5f5f5]"><li className="mb-2"><strong>Access and Update:</strong> Review and update your profile information at any time.</li>

                    <li className="mb-2"><strong>Opt-Out:</strong> Unsubscribe from promotional emails or restrict certain data collection via cookie preferences.</li>

                    <li className="mb-2"><strong>Delete Account:</strong> Request deletion of your account and associated data by contacting support@marketgrowth.io.</li>

                    <li className="mb-2"><strong>Data Portability:</strong> Request a copy of your data in a structured, electronic format.</li>

                    <li className="mb-2"><strong>Restrict Processing:</strong> Limit how your data is processed under certain conditions.</li></ul>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Data Security</strong></h3><p className="text-[#f5f5f5] mt-4">We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no system is entirely secure, and we cannot guarantee the absolute security of your data.</p>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Children&apos;s Privacy</strong></h3><p className="text-[#f5f5f5] mt-4">Gather is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data collection, we will take steps to delete it.</p>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Third-Party Links</strong></h3><p className="text-[#f5f5f5] mt-4">Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. Please review their privacy policies before sharing any information.</p>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Changes to This Privacy Policy</strong></h3><p className="text-[#f5f5f5] mt-4">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted with a revised effective date. We encourage you to review this policy regularly.</p>
                    <h3 className="text-[#f5f5f5] mt-6"><strong>Contact Us</strong></h3><p className="text-[#f5f5f5] mt-4">If you have questions or concerns about this Privacy Policy, please contact us at:</p><p className="text-[#f5f5f5] mt-4"><strong>MarketGrowth CX LLC</strong><br />1401 21st Street<br />Sacramento, CA 95811</p>
                    <p className="text-[#f5f5f5] mt-4"><strong>Email:</strong> <a href="mailto:suppor@marketgrowth.io">support@marketgrowth.io</a></p>
                  </div>
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
