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

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' },
]
const tiers = [
  {
    name: 'Solo founders & Creators',
    id: 'tier-solo',
    href: 'mailto:victor@marketgrowth.io',
    price: '$4,900',
    description: 'One-time design+build fee. Launch your own subscription-based website with community, courses, and digital downloads.',
    features: ['Secure Wordpress platform', 'Custom brand design & build', 'Courses & Groups', 'Digital Downloads', 'Community & Memberships', 'Post-launch support plans available' ],
  },
  {
    name: 'Startups & Growth Teams',
    id: 'tier-team',
    href: '#',
    price: 'Contact us',
    description: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
  },
]
export default function PlatformPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#1D3c34]">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MarketGrowth</span>
              <img
                alt="MarketGrowth"
                src="/images/logo-white.svg"
                className="w-[160px] h-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://marketgrowth.cx" target="_blank" className="text-sm/6 font-semibold text-white">
            Agentic GTM Hub <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1D3c34] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MarketGrowth</span>
                <img
                  alt="MarketGrowth"
                  src="/images/logo-white.svg"
                  className="h-4 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://marketgrowth.cx" target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    AI-powered GTM Hub <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative isolate">
        <div id="digital-engagement-platform" className="mx-auto mt-20 py-12 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-[#f5f5f5]">Your platform, your choice</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#f5f5f5] sm:text-4xl sm:text-balance">
              Partner with us to launch your brand platform using community-led growth motion
            </p>
            <p className="mt-6 max-w-3xl  mx-auto text-lg/8 text-gray-300">
              Build long-term value, connect with your audience, earn recurring income, and grow your business through every phase.
              Scale your brand&apos;s reach and customer experience with courses, communities, and knowledge sharing.
            </p>
          </div>
        </div>
        {/* Community screenshot section */}
        <div className="max-w-7xl mx-auto flow-root py-12 px-8 md:px-12">
          <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              alt="VirtualPro"
              src="/brand/mgio-vip-ss.png"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100"
            />
            <div className="mx-auto text-sm font-italic text-gray-300 mt-4">VirtualPro - a talent discovery platform built on social network, job board, and learning experience.</div>
          </div>
        </div>
        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="md:mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-2xl grid-cols-1 gap-14 text-base/7 text-[#f5f5f5] lg:max-w-none lg:grid-cols-2">
              <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Premier platform for your customers</h3>
                    <p>
                    Whether you&apos;re offering online courses, communities, memberships, or digital downloads, we&apos;re here to support every way you choose to share and grow your expertise.
                    </p>
                </div>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Tailored to your brand&apos;s aesthetic and guideline</h3>
                  <p>Use your own domain; customize the look and feel with your fonts and colors; and integrate with your existing tools and services. Create a seamless digital experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr  className="h-px max-w-[90%] sm:max-w-[80%]  md:max-w-7xl mx-auto my-8 sm:my-12 bg-gray-200 border-0 dark:bg-gray-400"/>
        <div className="isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base/7 font-semibold text-[#99D6EA]">Investment</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                Invest in your digital platform to grow your brand and community
              </p>
            </div>
            <div className="relative mt-6">
              <p className="mx-auto max-w-2xl text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
              </p>
              <svg
                viewBox="0 0 1208 1024"
                className="absolute -top-10 left-1/2 -z-10 h-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
              >
                <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" />
                <defs>
                  <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                    <stop stopColor="#3a8e6d" />
                    <stop offset={1} stopColor="#3a8e6d" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flow-root pb-24 sm:pb-32">
            <div className="-mt-80">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                    >
                      <div>
                        <h3 id={tier.id} className="text-base/7 font-semibold text-indigo-600">
                          {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline gap-x-2">
                          <span className="text-5xl font-semibold tracking-tight text-gray-900">{tier.price}</span>
                          <span className="text-base/7 font-semibold text-gray-600"></span>
                        </div>
                        <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
                        <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started today
                      </a>
                    </div>
                  ))}
                  <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                    <div className="lg:min-w-0 lg:flex-1">
                      <h3 className="text-base/7 font-semibold text-[#f5f5f5]]">Discounted/Equity Payment</h3>
                      <p className="mt-1 text-base/7 text-[#f5f5f5]">
                        We are flexible with payment options if you are a bootstrapped startup and a social impact project. Reach out for a free discovery call.
                      </p>
                    </div>
                    <a
                      href="mailto:victor@marketgrowth.io"
                      className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-[#f5f5f5]] ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5f5f5]]"
                    >
                      Plan a discovery call <span aria-hidden="true">&rarr;</span>
                    </a>
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
