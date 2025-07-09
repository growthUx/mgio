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
    name: 'Design+Build Plan',
    id: 'tier-growth',
    href: 'https://meetings.hubspot.com/victor-ramayrat',
    price: '$3,000',
    description: 'Starting at $3,000, this plan is the technical implementation of your predefined GTM and sales workflow. Subject to scope, priced at $800 per day. ',
    features: ['AI Prompt Design', 'Tools integration', 'Automation workflow builds', 'Testing' ],
  },
  {
    name: 'Manage Plan',
    id: 'tier-manage',
    href: 'https://meetings.hubspot.com/victor-ramayrat',
    price: '$500/mo',
    description: 'Manage and maintain your AI automation with our ongoing support plan. This includes regular updates, monitoring, and optimization to ensure your system runs smoothly.',
    features: [
      'Automation fault monitoring',
      'Bug fixes and refinement',
      'Minor adjustments to prompts and templates',
      'Consult for new use cases',
    ],
  },
]
const faqs = [
  {
    question: "How can AI automation services help my business grow?",
    answer:
      "MarketGrowth helps businesses save time, reduce costs, and accelerate growth by automating repetitive tasks and complex workflows using advanced AI tools. Whether you’re looking to streamline lead generation, personalize customer engagement, analyze data faster, or improve operational efficiency, our team designs tailored AI solutions that fit your unique needs. The result? More focus on high-value work and measurable impact on your bottom line.",
  },
  {
    question: "What types of processes can be automated with your AI services?",
    answer:
      "We help automate a wide range of business functions, including sales outreach, customer support chatbots, marketing campaign workflows, data extraction and analysis, document processing, lead scoring, CRM updates, reporting, and more. If a process involves repetitive steps or large volumes of data, there’s a strong chance we can automate it.",
  },
  {
    question: "Do I need to have AI expertise to work with MarketGrowth",
    answer:
      "Not at all. We handle the technical complexity for you. Our team translates your business goals into AI-powered workflows and systems, and we provide training and support so your team can easily manage the solutions we build. Management and optimization are also part of our service, so you can focus on your core business while we ensure your AI systems run smoothly.",
  },
  {
    question: "What technologies and tools do you use for AI automation?",
    answer:
      "We work with leading AI platforms and tools, including OpenAI’s GPT models, natural language processing (NLP) frameworks, machine learning libraries like TensorFlow and PyTorch, robotic process automation (RPA) tools, and integrations with platforms like Zapier, n8n, Make.com, and enterprise APIs. Our approach is flexible to match your tech stack and security requirements.",
  },
  {
    question: "Is my data safe when using AI automation?",
    answer:
      "Absolutely. Data privacy and security are top priorities for MarketGrowth.io. We follow strict data handling practices, comply with relevant regulations like GDPR, and can deploy solutions on-premises or in your private cloud to meet enterprise security standards.",
  },
  {
    question: "How long does it take to implement an AI automation project?",
    answer:
      "Project timelines vary depending on complexity. Simple automations can be delivered in a few weeks, while more advanced, custom solutions may take several months. We start with a discovery phase to define scope and provide clear timelines and milestones.",
  },
  {
    question: "Can you integrate AI automation with our existing systems?",
    answer:
      "Yes. Integration is a key part of our service. We build solutions that work seamlessly with CRMs, ERPs, marketing platforms, data warehouses, customer support tools, and other systems you already use, ensuring minimal disruption to your current workflows.",
  },
  // More questions...
]
const benefits = [
  'Grow your brand equity within your own community.',
  'Earn customer trust through personalized connections',
  'Publish contents that AI agents can crawl and learn from',
  'Establish your authority through knowledge sharing',
]
export default function AIAutomationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#1D3c34]">
      <main className="relative isolate">
        <div id="digital-engagement-platform" className="mx-auto mt-8 pt-12 pb-4 max-w-7xl px-6 lg:px-8 lg:pb-12">
          <div className="mx-auto max-w-5xl sm:text-center">
            {/* <h2 className="text-base/7 font-semibold text-[#40C1AC]">AI Automation for GTM Teams</h2> */}
            <h1 className="font-funnel-display mt-2 text-4xl font-semibold text-[#f5f5f5] sm:text-5xl text-balance">
            Run your business smarter with AI
            </h1>
            <p className="mt-6 max-w-3xl  mx-auto text-lg/8 text-gray-300">
            We help growing businesses automate repetitive tasks, boost efficiency, and unlock new growth. Imagine customer support handled 24/7, leads qualified automatically, or internal workflows running on autopilot. You get tailored AI automation which frees you to focus on business development.
            </p>
          </div>
        </div>
        {/* Community screenshot section */}
        <div className="max-w-7xl mx-auto flow-root py-12 px-8 md:px-12">
          <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              alt="VirtualPro"
              src="/images/n8n-ai-workflow.png"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100"
            />
            <div className="mx-auto text-sm font-italic text-gray-300 mt-4">Example implementation of an automated content creation engine on self-hosted n8n.</div>
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
        <hr  className="h-px max-w-[90%] sm:max-w-[80%]  md:max-w-7xl mx-auto my-8 sm:my-12 bg-gray-200 border-0 dark:bg-gray-400"/>
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-96 text-center sm:pt-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base/7 font-semibold text-[#40C1AC]">Flexible pricing plans</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Run your business smarter with AI
              </p>
            </div>
            <div className="relative mt-2">
              <p className="mx-auto max-w-2xl text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Flexible pricing plan that&apos;s focused on your success.
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
                        className="mt-8 block rounded-md px-3.5 py-2 text-center text-sm/6 font-semibold shadow-xs bg-green-600 hover:bg-green-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40C1AC]"
                      >
                        Get started today
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
                      className="rounded-md px-3.5 py-2 text-sm/6 font-semibold hover:text-[#00c951] text-[#f5f5f5] ring-1 hover:ring-[#00c951] ring-inset ring-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5f5f5]]"
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
                      Why choose us?
                    </h2>
                    <p className="mt-6 text-lg/8 text-pretty">
                        You should choose us if you&apos;re looking for a partner, not just a provider.
                        Most agencies do the job. We focus on outcomes, like more brand engagement, efficient AI automation, or better customer experience, whatever moves the needle for your business.
                        <br /><br />
                        We don&apos;t lock you into a cookie-cutter process. We come in, understand your challenges deeply, and build solutions that actually fit. And we stay accountable, from strategy to execution to results.
                    </p>
                    <div className="mt-10 flex">
                      <a href="https://meetings.hubspot.com/victor-ramayrat" className="text-sm/6 font-semibold text-[#00c951] hover:text-[#00c951]">
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
