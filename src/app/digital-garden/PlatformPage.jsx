'use client'

import { useState, Fragment } from 'react'
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
  MinusIcon,
  MinusSmallIcon,
  PlusSmallIcon
} from '@heroicons/react/20/solid'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const tiers1 = [
  {
    name: '0 to 1 Plan',
    id: 'tier-solo',
    href: 'https://meetings.hubspot.com/victor-ramayrat',
    price: '$4,900',
    description: 'One-time design+build fee. Launch your own subscription-based website with community, courses, and digital downloads.',
    features: ['Secure open source platform', 'Custom brand design & build', 'Courses & Groups', 'Forums and Downloads', 'Community & Memberships' ],
  },
  {
    name: 'Augment Plan',
    id: 'tier-team',
    href: 'https://meetings.hubspot.com/victor-ramayrat',
    price: 'Contact us',
    description: 'Hire us as a technical partner for your marketing lead or growth team to implement community-led growth motion. Build on a SaaS platform (like Gradual) or use open source.',
    features: [
      'Create your brand academy',
      'Facilitate online-offline events',
      'Publish gated and exclusive content',
      'Build a knowledge based that AI agents can use',
      'Know your audience with sign-ups and profiles',
    ],
  },
]
const tiers = [
  { name: 'Starter', id: 'tier-starter', href: 'https://meetings.hubspot.com/victor-ramayrat', priceMonthly: '$69/mo', mostPopular: false },
  { name: 'Growth', id: 'tier-growth', href: 'https://meetings.hubspot.com/victor-ramayrat', priceMonthly: '$180/mo', mostPopular: true },
  { name: 'Scale', id: 'tier-scale', href: 'https://meetings.hubspot.com/victor-ramayrat', priceMonthly: 'Contact us', mostPopular: false },
]
const sections = [
  {
    name: 'Brand & Platform',
    features: [
      { name: 'One-time setup fee', tiers: { Starter: '$499', Growth: '$2,400 *', Scale: 'Project-based' } },
      { name: 'Branding', tiers: { Starter: 'Bring your own', Growth: 'Included', Scale: 'As needed' } },
      { name: 'Customization help', tiers: { Starter: 'Self-serve', Growth: 'Template', Scale: 'Custom' } },
      { name: 'User Authentication', tiers: { Starter: 'E-mail', Growth: 'E-mail & Social', Scale: 'As needed' } },
      { name: 'Plugin License', tiers: { Starter: 'Bring your own', Growth: 'Included', Scale: 'Custom' } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Third-party Analytics', tiers: { Starter: 'Self-serve', Growth: 'GA4/GTM', Scale: 'Custom' } },
      { name: 'Custom Dashboard', tiers: { Starter: '$50/hr', Growth: '$40/hr', Scale: 'On-demand' } },
      { name: 'Custom Events Tracking', tiers: { Starter: '$50/hr', Growth: '$40/hr', Scale: 'As needed' } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '1:1 onboarding tour', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'E-mail support', tiers: { Starter: true, Growth: 'Within 24 hrs', Scale: 'SLA-defined' } },
      { name: 'Quarterly workshops', tiers: { Starter: false, Growth: true, Scale: 'As needed' } },
      { name: 'Priority phone support', tiers: { Starter: false, Growth: false, Scale: true } },
      { name: 'Design/Dev support', tiers: { Starter: '$40/hr', Growth: '$30/hr', Scale: 'As needed' } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const faqs = [
  {
    question: "How does engagement with MarketGrowth looks like?",
    answer:
      "Once you've started engagement by paying 50% of total fee, we will schedule a discovery call to understand your requirements and goals. We will then design and build your digital platform on OpenCMX platfom - a collection of open source plugin ecosystem that works within Wordpress. This includes setting up courses, micro-communities (groups), gated digital downloads, payments gateway, and analytics. After the initial launch, we can discuss ongoing support and maintenance options.",
  },
  {
    question: "What does the Growth plan include? *",
    answer:
      "The setup fee of $2,400 includes the design and build of your digital platform, which covers the following: (1) Brand design and development using OpenCMX - Wordpress . Setup of courses, micro-communities (groups), gated digital downloads, payments gateway, and analytics. This fee does not include post-launch support, ongoing maintenance and additional features that may be required after the initial launch. The Growth plan costs $180/mo and is payable annually - initially when the project is launched and monthly thereafter.",
  },
  {
    question: "You mentioned design, is brand design included?",
    answer:
      "Yes for our Growth Plan. We are firm believers that design is a key part of the user experience. We will work with you to create a custom brand design that reflects your vision and values. This includes logo design, color palette, typography, and overall visual style. Our goal is to create a cohesive and engaging digital platform that resonates with your audience. A copy of MarketGrowth brand guidelines will be provided to you as a reference output (also linked at the footer).",
  },
  {
    question: "We already have a brand design, can you work with it?",
    answer:
      "Yes. Choose the starter plan. If you would like the Growth plan, the initial setup fee would be reduced to $1,400. The requirement is that it's not only a logo, but a complete brand design that includes a color palette, typography, and overall visual style. We will work with you to ensure that your existing brand design is seamlessly integrated into the digital platform.",
  },
  {
    question: "How should I decide whether to build on open-source or third-party solutions like Thinkific or Gradual?",
    answer:
      "There are many factors to consider when deciding whether to build on open-source or third-party solutions. Some of the key factors include: (1) Your budget and resources: Open-source solutions may require more technical expertise and resources to set up and maintain, while third-party solutions may have higher upfront costs but offer more out-of-the-box features. (2) Your long-term goals: If you plan to scale your platform and add more features over time, open-source solutions may offer more flexibility and customization options. (3) Your team's expertise: If your team has experience with open-source technologies, it may be easier to build on those solutions. If not, a third-party solution may be a better fit. Regardless, we can help you decide which option is best for your needs and goals.",
  },
  {
    question: "I don't want to commit quite yet. Can I try it out?",
    answer:
      "Yes. If you are seriously considering the Growth plan, we can stage a demo for you to see how it works in action or you can book a discovery call with us to discuss your requirements and goals.",
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
        <div id="digital-engagement-platform" className="mx-auto mt-8 pt-12 pb-4 max-w-7xl px-6 lg:px-8 lg:pb-12">
          <div className="mx-auto max-w-5xl sm:text-center">
            {/* <h2 className="text-base/7 font-semibold text-[#40C1AC]">Build a brand moat around your product or expertise</h2> */}
            <h1 className="font-funnel-display mt-2 text-3xl font-semibold text-[#f5f5f5] sm:text-5xl text-balance">
             Serve and engage your ambassadors, learners&nbsp;and partners
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-md sm:text-lg/8">
            Building a trusted audience gives you a big head start on customer acquisition. The secret is that you have to start now. The earlier you start, the more you&apos;ll benefit from the network effects of your engaged audience. </p>
            <div className="mx-auto border-1 font-semibold border-green-200 p-8 mt-8 max-w-4xl"><p className="text-[#f5f5f5]"><span className="text-green-400">Power brand tip</span>: Ask yourself, what can my audience use now that I can immediately launch? Start with pillar content. They can be thought leadership articles, product videos in a course format, or affinity groups of shared learning. Your portal can be paid or free, it&apos;s up to you. <br /><a href="https://meetings.hubspot.com/victor-ramayrat" className="font-semibold italic text-green-400 border-b-1 pt-4 inline-block pb-[2px] border-dashed">Start by gradually building today.</a></p></div>
          </div>
        </div>
        {/* Community screenshot section */}
        <div className="max-w-7xl mx-auto flow-root py-12 px-8 pb-8 md:px-12">
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
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 text-center sm:pt-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-base/7 font-semibold text-[#40C1AC]">Done-for-you pricing</h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Invest today, build a brand moat tomorrow
              </p>
            </div>
            <div className="relative mt-6">
              <p className="mt-6 max-w-4xl mx-auto text-md sm:text-lg/8">
              Choose how you want to build an audience, either with open-source or third-pary SaaS. For open-source solutions, choose the Starter or Growth plan below that&apos;s packed with the best features including managed hosting, courses, group discussions, event calendar, gated downloads, blog posts, and more. All plans include all features, so you can start small and scale as you grow.
                
              </p>
              {/* <svg
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
              </svg> */}
            </div>

              {/* xs to lg */}
              <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                {tiers.map((tier) => (
                  <section
                    key={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-white/10 ring-inset' : '',
                      'p-8',
                    )}
                  >
                    <h3 id={tier.id} className="text-left text-sm/6 font-semibold text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-2 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold text-white">{tier.priceMonthly}</span>
                      {/* <span className="text-sm font-semibold text-gray-300">/month</span> */}
                    </p>
                    <a
                      href={tier.href}
                      target="_blank"
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.mostPopular
                          ? 'bg-green-600 hover:bg-green-500 hover:text-white text-white focus-visible:outline-green-500'
                          : 'bg-white/10 text-white hover:bg-green-600 focus-visible:outline-white',
                        'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
                      )}
                    >
                      Get started today
                    </a>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-white">
                      {sections.map((section) => (
                        <li key={section.name}>
                          <ul role="list" className="space-y-4">
                            {section.features.map((feature) =>
                              feature.tiers[tier.name] ? (
                                <li key={feature.name} className="flex gap-x-3">
                                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-green-400" />
                                  <span>
                                    {feature.name}{' '}
                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                      <span className="text-sm/6 text-gray-400">({feature.tiers[tier.name]})</span>
                                    ) : null}
                                  </span>
                                </li>
                              ) : null,
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {/* lg+ */}
              <div className="isolate mt-20 hidden lg:block">
                <div className="relative -mx-8">
                  {tiers.some((tier) => tier.mostPopular) ? (
                    <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                      <div
                        style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }}
                        aria-hidden="true"
                        className="flex w-1/4 px-4"
                      >
                        <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                      </div>
                    </div>
                  ) : null}
                  <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                    <caption className="sr-only">Pricing plan comparison</caption>
                    <colgroup>
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                    </colgroup>
                    <thead>
                      <tr>
                        <td />
                        {tiers.map((tier) => (
                          <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                            <div className="text-sm/7 font-semibold text-white">{tier.name}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="sr-only">Price</span>
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 pt-2 xl:px-8">
                            <div className="flex items-baseline gap-x-1 text-white">
                              <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
                              {/* <span className="text-sm/6 font-semibold">/month</span> */}
                            </div>
                            <a
                              href={tier.href}
                              target="_blank"
                              className={classNames(
                                tier.mostPopular
                                  ? 'bg-green-600 hover:bg-green-500 hover:text-white focus-visible:outline-green-600'
                                  : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                                'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2',
                              )}
                            >
                              Get started today
                            </a>
                          </td>
                        ))}
                      </tr>
                      {sections.map((section, sectionIdx) => (
                        <Fragment key={section.name}>
                          <tr>
                            <th
                              scope="colgroup"
                              colSpan={4}
                              className={classNames(
                                sectionIdx === 0 ? 'pt-8' : 'pt-16',
                                'pb-4 text-sm/6 font-semibold text-white',
                              )}
                            >
                              {section.name}
                              <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                            </th>
                          </tr>
                          {section.features.map((feature) => (
                            <tr key={feature.name}>
                              <th scope="row" className="py-4 text-sm/6 font-normal text-white">
                                {feature.name}
                                <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                              </th>
                              {tiers.map((tier) => (
                                <td key={tier.id} className="px-6 py-4 xl:px-8">
                                  {typeof feature.tiers[tier.name] === 'string' ? (
                                    <div className="text-center text-sm/6 text-gray-300">{feature.tiers[tier.name]}</div>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name] === true ? (
                                        <CheckIcon aria-hidden="true" className="mx-auto size-5 text-green-400" />
                                      ) : (
                                        <MinusIcon aria-hidden="true" className="mx-auto size-5 text-gray-500" />
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                      </span>
                                    </>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
          {/* <div className="flow-root pb-16 sm:pb-24">
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
                      href="https://meetings.hubspot.com/victor-ramayrat"
                      className="rounded-md px-3.5 py-2 text-sm/6 font-semibold hover:text-[#FFAA4D] text-[#f5f5f5] ring-1 hover:ring-[#FFAA4D] ring-inset ring-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5f5f5]]"
                    >
                      Book a discovery call <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
                      Why choose us?
                    </h2>
                    <p className="mt-6 text-lg/8 text-pretty">
                        You should choose us if you&apos;re looking for a partner, not just a provider.
                        Most agencies do the job. We focus on outcomes, like more brand engagement, efficient AI automation, or better customer experience, whatever moves the needle for your business.
                        <br /><br />
                        We don&apos;t lock you into a cookie-cutter process. We come in, understand your challenges deeply, and build solutions that actually fit. And we stay accountable, from strategy to execution to results.
                    </p>
                    {/* <ul
                      role="list"
                      className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-200 sm:grid-cols-2"
                    >
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-x-3">
                          <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-gray-200" />
                          {benefit}
                        </li>
                      ))}
                    </ul> */}
                    <div className="mt-10 flex">
                      <a href="https://meetings.hubspot.com/victor-ramayrat" className="text-sm/6 font-semibold text-[#FFAA4D] hover:text-[#FFAA4D]">
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
