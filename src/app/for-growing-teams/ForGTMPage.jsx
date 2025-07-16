'use client'

import { useState, Fragment } from 'react'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon,
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
  { name: 'Starter', id: 'tier-starter', cta: 'Buy this plan', href: 'https://meetings.hubspot.com/victor-ramayrat', priceMonthly: '$39/mo', mostPopular: false },
  { name: 'Growth', id: 'tier-growth', cta: 'Book a demo today', href: 'https://meetings.hubspot.com/victor-ramayrat', priceMonthly: '$180/mo', mostPopular: true },
  { name: 'Scale', id: 'tier-scale', cta: 'Get a free consult', href: 'https://meetings.hubspot.com/victor-ramayrat', priceMonthly: 'Contact us', mostPopular: false },
]
const sections = [
  {
    name: 'Brand & Platform',
    features: [
      { name: 'One-time setup fee', tiers: { Starter: '$499', Growth: '$2,400 *', Scale: 'Project-based' } },
      { name: 'Branding', tiers: { Starter: 'Bring your own', Growth: 'Included', Scale: 'As needed' } },
      { name: 'Customization help', tiers: { Starter: 'Template - Self-serve', Growth: 'Template - DFY', Scale: 'Custom' } },
      { name: 'User authentication', tiers: { Starter: 'E-mail', Growth: 'E-mail & Social', Scale: 'As needed' } },
      { name: 'Plugin licensing', tiers: { Starter: 'Bring your own', Growth: 'Included', Scale: 'Custom' } },
      { name: 'Contract term', tiers: { Starter: '1 year', Growth: '1 year', Scale: 'Project-based' } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Third-party analytics', tiers: { Starter: 'Self-serve', Growth: 'GA4/GTM', Scale: 'Custom' } },
      { name: 'Custom dashboard', tiers: { Starter: '$50/hr', Growth: 'Up to 2 pages', Scale: 'On-demand' } },
      { name: 'Custom events tracking', tiers: { Starter: '$50/hr', Growth: 'Up to 4 events', Scale: 'As needed' } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '1:1 onboarding tour', tiers: { Starter: true, Growth: true, Scale: true } },
      { name: 'E-mail support', tiers: { Starter: true, Growth: 'Within 24 hrs', Scale: 'SLA-defined' } },
      { name: 'Quarterly workshops', tiers: { Starter: false, Growth: true, Scale: 'As needed' } },
      { name: 'Priority phone support', tiers: { Starter: false, Growth: false, Scale: true } },
      { name: 'Post-launch support', tiers: { Starter: '$40/hr', Growth: '2hrs/mo', Scale: 'As needed' } },
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
      "The setup fee of $2,400 includes the design and build of your digital platform, which covers the following: (1) Brand design and development using OpenCMX on Wordpress platform. (2) Setup of courses, micro-communities (groups), gated digital downloads, payments gateway, and analytics. This fee does not include post-launch support, ongoing maintenance and additional features that may be required after the initial launch. The Growth plan costs $180/mo and is payable annually - initially right after the project is launched.",
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
    question: "How should I decide whether to build on open-source or third-party solutions like Gradual?",
    answer:
      "There are many factors to consider when deciding whether to build on open-source or third-party solutions. Some of the key factors include: (1) Your budget and resources, (2) Your long-term goals, (3) Your team's expertise. Regardless of these factors, we can help. If you would like to consider Gradual as your platform, choose the Scale plan on our pricing matrix.",
  },
  {
    question: "I don't want to commit quite yet. Can I try it out?",
    answer:
      "Yes. If you are seriously considering the Growth plan, we can stage a demo for you to see how it works in action or you can book a discovery call with us to discuss your requirements and goals.",
  },
  {
    question: "If I choose OpenCMX on Wordpress, will I be locked-in to MarketGrowth?",
    answer:
      "Not forever. After the first year, you can choose to migrate out of our DFY service. If you are on the Growth plan, you can opt to downgrade to the Starter plan. Like any Wordpress website, migration out is straightforward. You can export your content, users, and data from the platform and import it into another system. We will provide you with the necessary tools and support to ensure a smooth transition.",
  },
  {
    question: "Do you have a work example of the template you will use for the Starter and Growth plan?",
    answer:
      "Yes, you can visit and register at VirtualPro.ph to see the template in action. This is a talent discovery platform that uses courses, social network, activity feed, forums, groups, blog posts and events. It is built on OpenCMX open source ecosystem. You can also subscribe to the MarketGrowth.cx community to see how we use the same template as a resource hub for Founder and Agentic GTM.",
  },
  // More questions...
]
const benefits = [
  'Grow your brand equity within your own community.',
  'Earn customer trust through personalized connections',
  'Publish contents that AI agents can crawl and learn from',
  'Establish your authority through knowledge sharing',
]
export default function ForGTMPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#1D3c34]">
      <main className="relative isolate">
      <div className="overflow-hidden pt-16 pb-20 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-base/7 font-semibold text-[#40C1AC]">For GTM Teams</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight leading-[1.2] text-pretty text-[#f5f5f5] sm:text-5xl">
                With agentic-led GTM in the near horizon, having your own business community builds a brand moat like no other.
              </h1>
              <p className="mt-6 text-xl/8 text-[#f5f5f5] pr-12">
              Your personal brand is the seedbed for business growth. Start planting it early. Nurture it wisely. Let it scale alongside your business.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
              <div className="relative lg:order-last lg:col-span-5">
                <svg
                  aria-hidden="true"
                  className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
                >
                  <defs>
                    <pattern
                      id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                  </defs>
                  <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <figure className="border-l border-[#40C1AC] pl-8">
                  <blockquote className="text-xl/8 font-semibold tracking-tight text-[#f5f5f5]">
                    <p>
                      Founder-led content significantly influences purchase decisions (e.g. 54% of decision-makers say they purchase from companies whose leaders produce thought leadership)
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 flex gap-x-4">
                    {/* <img
                      alt=""
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                    /> */}
                    <div className="text-sm/6">
                      <div className="font-semibold text-[#f5f5f5]">B2B Thought Leadership Impact Study</div>
                      <div className="text-[#f5f5f5]">LinkedIn 2023</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="max-w-xl text-base/7 text-[#f5f5f5] lg:col-span-7">
                <p>
                As a founder, you are your company&apos;s earliest and strongest signal to the market. Long before your product reaches maturity, your personal brand is already shaping how customers, investors, and future employees perceive your business. Yet too many founders treat personal branding as an afterthought, waiting until &quot;the company is bigger.&quot; <br /><br /><strong>But the reality is clear:</strong>
                </p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-[#f5f5f5]">
                  <li className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                    <span>People buy from people, not logos.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                    <span>Founders who show up publicly accelerate trust and credibility.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                    <span>A founder&apos;s voice is the fastest way to cut through noise in crowded markets.</span>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="mt-12 mb-6 text-2xl font-semibold tracking-tight leading-[1.2] text-pretty text-[#f5f5f5] sm:text-3xl">The Digital Garden: The foundation for your founder brand</h3>
            <p className="max-w-4xl text-[#f5f5f5]">A personal brand can&apos;t thrive in rented spaces alone. Social platforms are valuable, but they&apos;re algorithms you can&apos;t control. That&apos;s why we believe in helping founders build their own <strong>Digital Garden</strong> — an online engagement platform designed to house your ideas, your expertise, and your unique story.<br /><br />Think of it as your home base for:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-[#f5f5f5]">
              <li className="flex gap-x-3">
                <BookOpenIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                <span>Publishing thought leadership that positions you as an expert.</span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                <span>Hosting resources and insights your audience can revisit. They can be in the form of courses, gated digital downloads, or blog posts.</span>
              </li>
              <li className="flex gap-x-3">
                <ChatBubbleLeftIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                <span>Nurturing conversations with your ecosystem of ambassadors, prospects, investors, customers, and partners.</span>
              </li>
              <li className="flex gap-x-3">
                <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                <span>Creating content for SEO and GEO discoverability that grows over time.</span>
              </li>
            </ul>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
              <div className="relative lg:order-last lg:col-span-5">
                <svg
                  aria-hidden="true"
                  className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
                >
                  <defs>
                    <pattern
                      id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M0.5 0V200M200 0.5L0 0.499983" />
                    </pattern>
                  </defs>
                  <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <figure className="border-l border-[#40C1AC] pl-8">
                  <blockquote className="text-xl/8 font-semibold tracking-tight text-[#f5f5f5]">
                    <p>
                     Founder-led marketing can improve brand credibility and shorten sales cycles in high-trust industries.
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 flex gap-x-4">
                    {/* <img
                      alt=""
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                    /> */}
                    <div className="text-sm/6">
                      <div className="font-semibold text-[#f5f5f5]">The Role of the CEO in B2B Marketing</div>
                      <div className="text-[#f5f5f5]">Gartner (2021)</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="max-w-xl text-base/7 text-[#f5f5f5] lg:col-span-7">
                <p>This is how you ensure your personal brand lives beyond fleeting social media trends, and becomes a long-term moat for your business.
                </p>
                <h3 className="mt-12 text-2xl font-bold tracking-tight text-[#f5f5f5]">Personal brand as a strategic asset, not just a marketing tactic</h3>
                  <p className="mt-6">
                    Research shows founder visibility isn&apos;t just nice to have. It&apos;s a measurable driver of business growth:
                  </p>
                  <ul role="list" className="mt-8 max-w-xl space-y-8 text-[#f5f5f5]">
                    <li className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                      <span>68% of people trust founders more than corporate brands (Edelman Trust Barometer, 2023)</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                      <span>54% of B2B decision-makers say thought leadership from company leaders influences purchase decisions (LinkedIn, 2023)</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                      <span>70% feel more connected to brands whose leaders are active online (Sprout Social, 2022)</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-8">A strong personal brand helps you:</h4>
                  <ul role="list" className="list-disc mt-6 max-w-xl pl-4 space-y-4 text-[#f5f5f5]">
                    <li>Shorten sales cycles by building pre-existing trust.</li>
                    <li>Attract top talent eager to work with visionary leaders.</li>
                    <li>Gain media visibility and speaking opportunities.</li>
                    <li>Create resilience against market volatility.</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-8">The Cost of Waiting</h3>
                  <p className="mt-6">
                  The biggest mistake founders make? Waiting for the &quot;right time&quot; to start building their personal brand. But personal brands grow like gardens &mdash; they require time, consistent care, and space to flourish.<br /><br /> If you wait until your company is &quot;big enough,&quot; you miss the compound effects that early investment brings:
                  </p>
                  <ul role="list" className="list-disc mt-6 max-w-xl pl-4 space-y-4 text-[#f5f5f5]">
                    <li>Organic search traffic takes months to build authority.</li>
                    <li>Audiences need time to discover, follow, and trust your voice.</li>
                    <li>Relationships and reputation don&apos;t materialize overnight.</li>
                    <li>Starting now is an investment in future business scalability.</li>
                  </ul>
                  <h3 className="mt-12 text-2xl font-bold tracking-tight text-[#f5f5f5]">How MarketGrowth helps founders design and build engaging personal brands</h3>
                  <p className="mt-6">
                  At MarketGrowth, we help founders turn personal branding from an overwhelming concept into a clear, actionable system.
                  <br /><br /> Our Digital Engagement Platform empowers you to:
                  </p>
                  <ul role="list" className="mt-8 max-w-xl space-y-8 text-[#f5f5f5]">
                    <li className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                      <span>Launch your Digital Garden. Your own branded home for content, community, and authority-building.</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                      <span>Show up consistently. We help you plan, create, and distribute thought leadership without burning out.</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#40C1AC]" />
                      <span>Turn your voice into growth. Use data and audience insights to connect your personal brand to real business results.</span>
                    </li>
                  </ul>
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
              <p className="mt-6 text-[#f5f5f5] max-w-4xl mx-auto text-md sm:text-lg/8">
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
                    <h3 id={tier.id} className="text-left text-md/6 font-semibold text-white">
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
                      {tier.cta}
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
                              {tier.cta}
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
                    <p className="mt-6 text-lg/8 text-[#f5f5f5] text-pretty">
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
