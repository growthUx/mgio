'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
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
  ChevronRightIcon,
  MinusSmallIcon,
  PlusSmallIcon
} from '@heroicons/react/20/solid'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const tiers = [
  {
    name: '0 to 1 Plan',
    id: 'tier-solo',
    href: 'mailto:victor@marketgrowth.io',
    price: '$4,900',
    description: 'One-time design+build fee. Launch your own subscription-based website with community, courses, and digital downloads.',
    features: ['Secure OpenCMX Platform', 'Custom brand design & build', 'Courses & Groups', 'Digital Downloads', 'Community & Memberships', 'MCP server for AI Agents' ],
  },
  {
    name: 'Augment Plan',
    id: 'tier-team',
    href: 'mailto:victor@marketgrowth.io',
    price: 'Contact us',
    description: 'Hire us as a technical partner for your marketing lead or growth team to implement community-led growth motion. Build on the SaaS platform or on open source.',
    features: [
      'Create your brand academy',
      'Facilitate online-offline events',
      'Publish gated and exclusive content',
      'Build a knowledge based that AI agents can use',
      'Know your audience with sign-ups and profiles',
    ],
  },
]
const faqs = [
  {
    question: "How does engagement with MarketGrowth looks like?",
    answer:
      "Once you've started engagement by paying 50% of total fee, we will schedule a discovery call to understand your requirements and goals. We will then design and build your digital platform on Wordpress using the BuddyBoss platform. This includes setting up courses, micro-communities (groups), gated digital downloads, payments gateway, and analytics. After the initial launch, we can discuss ongoing support and maintenance options.",
  },
  {
    question: "What does the $4,900 include and not include?",
    answer:
      "The first engagement fee of $4,900 includes the design and build of your digital platform, which covers the following: Brand design and development on Wordpress using the BuddyBoss platform. Setup of courses, micro-communities (groups), gated digital downloads, payments gateway, and analytics. This fee does not include post-launch support, ongoing maintenance or plug-in licenses and additional features that may be required after the initial launch.",
  },
  {
    question: "You mentioned design, is brand design included?",
    answer:
      "Yes. We are firm believers that design is a key part of the user experience. We will work with you to create a custom brand design that reflects your vision and values. This includes logo design, color palette, typography, and overall visual style. Our goal is to create a cohesive and engaging digital platform that resonates with your audience. A copy of MarketGrowth brand guidelines will be provided to you as a reference output (also linked at the footer).",
  },
  {
    question: "We already have a brand design, can you work with it?",
    answer:
      "Yes. Your pricing drops to $3,500 for the build aspect of your digital garden. The requirement is that it's not only a logo, but a complete brand design that includes a color palette, typography, and overall visual style. We will work with you to ensure that your existing brand design is seamlessly integrated into the digital platform.",
  },
  {
    question: "How should I decide whether to build on open-source or third-party solutions like Thinkific or Gradual?",
    answer:
      "There are many factors to consider when deciding whether to build on open-source or third-party solutions. Some of the key factors include: (1) Your budget and resources: Open-source solutions may require more technical expertise and resources to set up and maintain, while third-party solutions may have higher upfront costs but offer more out-of-the-box features. (2) Your long-term goals: If you plan to scale your platform and add more features over time, open-source solutions may offer more flexibility and customization options. (3) Your team's expertise: If your team has experience with open-source technologies, it may be easier to build on those solutions. If not, a third-party solution may be a better fit. Regardless, we can help you decide which option is best for your needs and goals.",
  },
  {
    question: "I don't want to commit quite yet. Can I try it out?",
    answer:
      "Yes. If you are planning to build your own Academy or University for your product knowledge base, we can host your first course and micro-community on the MarketGrowth CX community for $499. You can then experience the 'art of possible' for your own platform. This is a great way to test the waters and see how our platform works before making a larger commitment.",
  },
  // More questions...
]
const benefits = [
  'Grow your brand equity within your own community.',
  'Earn customer trust through personalized connections',
  'Publish contents that AI agents can crawl and learn from',
  'Establish your authority through knowledge sharing',
]
export default function PlatformPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#1D3c34]">
      <main className="relative isolate">
        <div id="digital-engagement-platform" className="mx-auto mt-20 pt-12 pb-4 max-w-7xl px-6 lg:px-8 lg:pb-12">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-[#40C1AC]">Grow your online presence into a digital garden</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#f5f5f5] sm:text-6xl sm:text-balance">
            Your competitors are building communities &mdash; are you?
            </p>
            <p className="mt-6 max-w-3xl  mx-auto text-lg/8 text-gray-300">
            Brands with engaged communities grow faster and stay ahead. Don&apos;t risk falling behind while others turn visitors into loyal superfans. You don&apos;t have to build a social network.<br /><br />
            <strong>Power brand tip:</strong> Launch an online academy to educate users about your product or offer practical &apos;how-to&apos; courses that deliver value to your audience.</p>
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
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-96 text-center sm:pt-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-base/7 font-semibold text-[#40C1AC]">Invest today, build a brand moat tomorrow</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Business-friendly pricing
              </p>
            </div>
            <div className="relative mt-6">
              <p className="mx-auto max-w-2xl text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              We&apos;re only taking 5 new projects this month. Secure your spot before it&apos;s gone.
                
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
          <div className="flow-root pb-16 sm:pb-24">
            <div className="-mt-80">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                    >
                      <div>
                        <h3 id={tier.id} className="text-base/7 font-semibold text-[#40C1AC]">
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
                              <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#40C1AC]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className="mt-8 block rounded-md bg-[#1D3c34] px-3.5 py-2 text-center text-sm/6 font-semibold text-[#f5f5f5] shadow-xs hover:bg-[#FFAA4D] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d3c34]"
                      >
                        Secure your spot today
                      </a>
                    </div>
                  ))}
                  <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                    <div className="lg:min-w-0 lg:flex-1 sm:mr-8">
                      <h3 className="text-lg/7 font-semibold text-[#f5f5f5] mb-4">Flexible Payment Options</h3>
                      <p className="mt-1 text-base/7 text-[#f5f5f5]">
                      We&apos;re flexible with payment terms if you&apos;re a bootstrapped startup or working on a social impact project. Options can include discounted rates, equity-based payments, or revenue sharing &mdash; such as a discounted 50% setup fee combined with a capped profit share.
                      </p>
                    </div>
                    <a
                      href="mailto:victor@marketgrowth.io"
                      className="rounded-md px-3.5 py-2 text-sm/6 font-semibold hover:text-[#FFAA4D] text-[#f5f5f5] ring-1 hover:ring-[#FFAA4D] ring-inset ring-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5f5f5]]"
                    >
                      Book a discovery call <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr  className="h-px max-w-[90%] sm:max-w-[80%]  md:max-w-7xl mx-auto my-8 sm:my-12 bg-gray-200 border-0 dark:bg-gray-400"/>
          <div className="isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
                <dl className="mt-16 divide-y divide-white/10">
                  {faqs.map((faq) => (
                    <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                      <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                          <span className="text-base/7 font-semibold">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                            <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base/7 text-gray-300">{faq.answer}</p>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="overflow-hidden py-24">
            <div className="relative isolate">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/[0.03] px-6 py-16 shadow-none ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                  /> */}
                  <div className="w-full flex-auto">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                      If not today, when?
                    </h2>
                    <p className="mt-6 text-lg/8 text-pretty text-gray-400">
                      Your brand is the most valuable asset you have. AI is taking over knowledge discovery. Leverage community-led growth and content publishing to build you business moat. Use agent-led GTM to automate and scale your business.
                    </p>
                    <ul
                      role="list"
                      className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-200 sm:grid-cols-2"
                    >
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-x-3">
                          <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-gray-200" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 flex">
                      <a href="mailto:victor@marketgrowth.io" className="text-sm/6 font-semibold text-[#FFAA4D] hover:text-[#FFAA4D]">
                        Book a free discovery call
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                  }}
                  className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
