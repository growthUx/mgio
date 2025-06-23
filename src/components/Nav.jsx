import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

const engagement = [
  { name: 'Digital Engagement', target: "_self", href: '/platform', icon: UsersIcon },
  { name: 'AI Workflow Automation', target: "_self", href: '/#ai-automation', icon: ShieldCheckIcon },
  { name: 'Analytics & Reporting', target: "_self", href: '/#analytics-reporting', icon: ChartBarSquareIcon },
]
const resources = [
  { name: 'Agentic GTM Resources', target: "_blank", href: 'https://marketgrowth.cx/resources', icon: UserGroupIcon },
  { name: 'Agentic GTM Academy', target: "_blank", href: 'https://marketgrowth.cx/courses', icon: AcademicCapIcon },
  { name: 'Brand Guideline', target: "_blank", href: 'http://localhost:3000/brand/MarketGrowthStyleGuide.pdf', icon: BookOpenIcon },
]
const recentPosts = [
  {
    id: 1,
    title: 'GTM for Founders Simplified',
    href: 'https://marketgrowth.cx/wp-content/uploads/2025/06/GTM-Foundations-MarketingPlanSimplified.pdf',
    target: '_blank',
    date: 'May 20, 2025',
    datetime: '2025-05-20',
    category: { title: 'eBook', href: 'https://marketgrowth.cx/wp-content/uploads/2025/06/GTM-Foundations-MarketingPlanSimplified.pdf' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Going to market is hard. We have written an eBook for you to simplify marketing.',
  },
  {
    id: 2,
    title: 'The 7-11-4 framework',
    href: 'https://marketgrowth.cx/go-to-market/gtm-motion-approach/how-to-use-7-11-4-framework-to-build-trust-and-drive-growth-for-your-business',
    target: '_blank',
    date: 'May 30, 2025',
    datetime: '2025-05-30',
    category: { title: 'Article', href: 'https://marketgrowth.cx/go-to-market/gtm-motion-approach/how-to-use-7-11-4-framework-to-build-trust-and-drive-growth-for-your-business' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Buyers purchase from brands they feel authoritative and familiar. Follow this framework to earn trust and authority.',
  },
]

export default function Nav() {
  return (
    <Popover className="relative isolate z-50">
      <div className="py-5">
        <div className="flex mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex mt-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MarketGrowth</span>
              <img
                alt="MarketGrowth"
                src="/images/logo-white.svg"
                className="w-[160px] h-auto"
              />
            </a>
          </div>
          <PopoverButton className="flex items-center gap-x-1 ml-10 text-sm/6 font-semibold text-[#f5f5f5] focus-visible:outline-none">
            Solutions
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://marketgrowth.cx" target="_blank" className="text-sm/6 font-semibold text-white">
            Agentic GTM Hub <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-0 -z-10 pt-16 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in bg-gradient-to-b from-[#19372f] to-[#1c5b4b]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
            <div>
              <h3 className="text-sm/6 font-medium text-[#f5f5f5]">Done-for-you</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {engagement.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      className="flex gap-x-4 py-2 text-sm/6 font-semibold text-[#f5f5f5]"
                    >
                      <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm/6 font-medium text-[#f5f5f5]">Resources</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      className="flex gap-x-4 py-2 text-sm/6 font-semibold text-[#f5f5f5]"
                    >
                      <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
            <h3 className="sr-only">Recent posts</h3>
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
              >
                <div className="relative flex-none">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-[#f5f5f5]/10 ring-inset" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4">
                    <time dateTime={post.datetime} className="text-sm/6 text-[#f5f5f5]">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      target={post.target}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-[#1D3c34]"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <h4 className="mt-2 text-sm/6 font-semibold text-[#f5f5f5]">
                    <a 
                      href={post.href}
                      target={post.target}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-2 text-sm/6 text-[#f5f5f5]">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
