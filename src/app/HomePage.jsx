'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
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

const cards = [
  {
    name: 'GA4 and Google Tag Manager',
    description: 'Track key user interactions and conversions across your website and app; measure performance and user behavior.',
    icon: PhoneIcon,
  },
  {
    name: 'Segment -> BigQuery ',
    description: 'Collect, unify, and send customer data to all your tools; ensuring consistent insights across your marketing, analytics, and CRM.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Looker/Tableau',
    description: 'Analyze KPIs, feature usage, user flows, and retention so you can optimize for engagement and business growth.',
    icon: NewspaperIcon,
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#1D3c34]">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
      </header>

      <main className="relative isolate">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1108/632 w-277 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>

        {/* Header section */}
        <div className="relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 mt-24 lg:mt-4 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-24">
              {/* <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                    <span>Just shipped v1.0</span>
                    <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-500" />
                  </span>
                </a>
              </div> */}
              <h1 className="font-funnel-display text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-6xl">We are the technical partner for founders and GTM teams</h1>
              <p className="mt-8 text-md max-w-xl mx-auto font-medium text-pretty text-[#F5F5F5] sm:text-lg/8 sm:mx-0">Hire us to implement the technical aspect of your agent- and community-led growth motion. From digital experience to AI workflow automation, we will help you launch, grow, and scale effectively.</p>
              {/* <p className="mt-8 font-semibold text-[#00a63e]">We&apos;re here to help!</p> */}
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="mailto:victor@marketgrowth.io"
                  target="_blank" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get a free consult
                </a>
                <a href="#digital-engagement-platform" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="MarketGrowth Community"
                  src="/images/marketgrowth-ss.png"
                  width={2432}
                  height={1442}
                  className="w-304 rounded-md shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-300 ease-in-out opacity-60 hover:opacity-100"
                />
                <div className="mx-auto text-sm font-italic text-gray-300 mt-4">MarketGrowth CX: Agentic GTM Community</div>
              </div>
            </div>
          </div>
        </div>

        <div id="digital-engagement-platform" className="mx-auto py-12 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-[#f5f5f5]">Build an industry-leading brand</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#f5f5f5] sm:text-4xl sm:text-balance">
              Own your distribution channel and market to your captured audience
            </p>
            <p className="mt-6 max-w-3xl  mx-auto text-lg/8 text-gray-300">
              Build your brand that create trust and authority at scale, where you can connect CLGTM motion to opportunities. Launch a digital engagement platform that includes features like gated content and paid subscriptions. You can then scale it up with social networking, courses, forums, shopping, and more. 
            </p>
          </div>
        </div>
        {/* Community screenshot section */}
        <div className="max-w-7xl mx-auto flow-root py-12 px-8 md:px-12">
          <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              alt="Hustle/Side Hustle Community"
              src="/images/hush-ss.png"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100"
            />
            <div className="mx-auto text-sm font-italic text-gray-300 mt-4">HuSH - a social network to promote entrepreneurship and self-reliance.</div>
          </div>
        </div>
        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="md:mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-2xl grid-cols-1 gap-14 text-base/7 text-[#f5f5f5] lg:max-w-none lg:grid-cols-2">
              <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Start with a scalable digital experience platform</h3>
                    <p>
                    Launch a paid or free subscription-based website. Offer exclusive content and programs that keep your audience engaged and invested.
                    </p>
                </div>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Establish trust and authority with delight </h3>
                  <p>Transform your site into an engagement platform that attracts and converts visitors into loyal customers and community members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr  className="h-px max-w-[90%] sm:max-w-[80%]  md:max-w-7xl mx-auto my-8 sm:my-12 bg-gray-200 border-0 dark:bg-gray-400"/>
        <div className="relative py-12 sm:py-32 overflow-hidden">
          {/* <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl z-10">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu z-10">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div> */}
          <div id="ai-automation" className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="text-base/7 font-semibold text-[#f5f5f5]">Scale your business with AI agents</h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#f5f5f5] sm:text-4xl sm:text-balance">
              Automate your go-to-market and sales motion with AI agents
              </p>
              <p className="mt-6 max-w-2xl mx-auto text-lg/8 text-gray-300">
              MarketGrowth is the AI automation agency purpose-built for go-to-market teams — we help founders and growth leaders automate customer acquisition, sales workflows, and backend ops using agentic systems that integrate seamlessly with your existing tools and team.
              </p>
            </div>
          </div>
          <div className="pt-16 z-100">
            <div className="mx-auto max-w-7xl px-8 md:px-12">
              <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="MarketGrowth N8N AI Workflow Automation"
                  src="/images/n8n-ai-workflow.png"
                  width={2432}
                  height={1442}
                  className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100 z-100"
                />
                <div className="mx-auto text-sm font-italic text-gray-300 mt-4">Example implementation of an automated content creation engine on self-hosted n8n.</div>
              </div>
            </div>
          </div>
          {/* Content section */}
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <div className="md:mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-2xl grid-cols-1 gap-14 text-base/7 text-[#f5f5f5] lg:max-w-none lg:grid-cols-2">
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Automate key parts of your GTM and sales ops</h3>
                    <p>From qualifying leads to delivering personalized follow-ups, these automations free up your time and increase your ability to scale efficiently. The result is a leaner, smarter system that works for you around the clock.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Grow with a system designed for long-term success</h3>
                    <p>
                    Build a digital experience ecosystem that drive revenue and engagement. With ongoing support and optimization, you will have a system that grows with you, backed by data and strategy that delivers results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Analytics */}
        <div id="analytics-reporting" className="relative isolate overflow-hidden bg-[#1D3c34] py-24 sm:py-32">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center transition-opacity duration-300 ease-in-out opacity-20 mix-blend-soft-light hover:opacity-40"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">Measure. Improve. Market growth.</h3>
              <p className="mt-8 text-lg text-pretty text-[#f5f5f5] sm:text-lg/8">
              Integrate analytics that track user behavior, engagement, and conversion across your platform. These insights help you understand what&apos;s working, where users drop off, and how to optimize for better performance.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {cards.map((card) => (
                <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset">
                  {/* <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" /> */}
                  <div className="text-base/7">
                    <h3 className="font-semibold text-white">{card.name}</h3>
                    <p className="mt-2 text-gray-300">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         {/* Image section */}
         {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            className="aspect-9/4 w-full object-cover xl:rounded-3xl"
          />
        </div> */}

        {/* Values section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Our values</h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-500" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div> */}

        {/* Team section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Our team</h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="aspect-14/13 w-full rounded-2xl object-cover" />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">{person.name}</h3>
                <p className="text-base/7 text-gray-300">{person.role}</p>
                <p className="text-sm/6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div> */}

        {/* CTA section */}
        {/* <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Join our team
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                  in accusamus quisquam.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                    See our job postings <span aria-hidden="true">&rarr;</span>
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
              className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            />
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  )
}
