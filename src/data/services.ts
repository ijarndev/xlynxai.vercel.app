// web development
import Briefcase from 'astro-heroicons/outline/Briefcase.astro'
import ComputerDesktop from 'astro-heroicons/outline/ComputerDesktop.astro'
import Cog6Tooth from 'astro-heroicons/outline/Cog6Tooth.astro'
import ShoppingCart from 'astro-heroicons/outline/ShoppingCart.astro'
import hostinger from '../assets/svg/hostinger.svg'
import vercel from '../assets/svg/vercel.svg'
import wordpress from '../assets/svg/wordpress.svg'
import astro from '../assets/svg/astro.svg'
import Bolt from 'astro-heroicons/outline/Bolt.astro'
import MagnifyingGlass from 'astro-heroicons/outline/MagnifyingGlass.astro'
import DevicePhoneMobile from 'astro-heroicons/outline/DevicePhoneMobile.astro'
import ChartBarSquare from 'astro-heroicons/outline/ChartBarSquare.astro'
import CodeBracket from 'astro-heroicons/outline/CodeBracket.astro'

// ai automation
import AdjustmentsHorizontal from 'astro-heroicons/outline/AdjustmentsHorizontal.astro'
import CircleStack from 'astro-heroicons/outline/CircleStack.astro'
import ChatBubbleLeftRight from 'astro-heroicons/outline/ChatBubbleLeftRight.astro'
import ArrowTrendingUp from 'astro-heroicons/outline/ArrowTrendingUp.astro'
import n8n from '../assets/svg/n8n.svg'
import CurrencyDollar from 'astro-heroicons/outline/CurrencyDollar.astro'
import Clock from 'astro-heroicons/outline/Clock.astro'
import Sparkles from 'astro-heroicons/outline/Sparkles.astro'

export const services = [
  {
    slug: "web-development",
    name: "Web Development",
    icon: CodeBracket,
    title: "Expert Web Development Services | Modern & Fast Websites",
    subtitle: "We create fast, modern and scalable websites using the latest technologies like Astro, React, and TailwindCSS.",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus perspiciatis animi a? Nulla quisquam voluptatum doloribus provident eius dignissimos!',
    ctaText: "Launch My Website",
    ctaSubtitle: "Contact us to create your next web project",
    ctaHref: "/",
    homeHref: "/services/web-development",
    isPopular: true,
    solutions: {
      title: "Custom Web Solutions",
      subtitle: "We develop websites that not only look good but also work exceptionally well",
      items: [
        {
          icon: ShoppingCart,
          title: "E-commerce Portals",
          description: "Scalable online stores with seamless shopping and payment experiences."
        },
        {
          icon: Briefcase,
          title: "Corporate Websites",
          description: "Professional and polished websites that represent your brand effectively."
        },
        {
          icon: ComputerDesktop,
          title: "Landing Pages",
          description: "High-converting landing pages designed to capture leads and drive action."
        },
        {
          icon: Cog6Tooth,
          title: "Web Applications",
          description: "Custom web applications tailored to your business needs and workflows."
        }
      ]
    },
    technologies: {
      title: "Technologies we use",
      subtitle: "We use a cutting-edge technology stack for optimal performance",
      items: [
        {
          icon: astro,
          name: "Astro",
          description: "Amazingly fast websites"
        },
        {
          icon: wordpress,
          name: "Wordpress",
          description: "Content-driven manageable web applications"
        },
        {
          icon: hostinger,
          name: "Hostinger",
          description: "Top #1 Wordpress hosting provider"
        },
        {
          icon: vercel,
          name: "Vercel",
          description: "Hosting for modern applications"
        }
      ]
    },
    benefits: {
      title: "Benefits of our web development services",
      items: [
        {
          icon: Bolt,
          title: "Performance Optimization",
          description: "We ensure your website loads quickly and performs well across all devices."
        },
        {
          icon: MagnifyingGlass,
          title: "SEO Friendly",
          description: "Our websites are built with SEO best practices to help you rank higher in search results."
        },
        {
          icon: DevicePhoneMobile,
          title: "Responsive Design",
          description: "We create websites that look great and function perfectly on any screen size."
        },
        {
          icon: ChartBarSquare,
          title: "Scalability",
          description: "Our solutions are designed to grow with your business, accommodating increasing traffic and features."
        }
      ]
    }
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    icon: Sparkles,
    title: "Transform your business with AI-powered automation solutions",
    subtitle: "Streamline operations and boost efficiency",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus perspiciatis animi a? Nulla quisquam voluptatum doloribus provident eius dignissimos!',
    ctaText: "Automate My Bussiness",
    ctaHref: "/",
    homeHref: "/services/ai-automation",
    solutions: {
      title: "Intelligent automation solutions for your business",
      items: [
        {
          icon: AdjustmentsHorizontal,
          title: "Process Automation",
          description: "Automate repetitive tasks and workflows with AI-driven solutions."
        },
        {
          icon: CircleStack,
          title: "Data Analysis",
          description: "Extract valuable insights from your data using machine learning."
        },
        {
          icon: ChatBubbleLeftRight,
          title: "Chatbots & Virtual Assistants",
          description: "Enhance customer service with AI-powered conversation agents."
        },
        {
          icon: ArrowTrendingUp,
          title: "Predictive Analytics",
          description: "Make data-driven decisions with AI forecasting capabilities."
        }
      ]
    },
    technologies: {
      title: "Technologies we use",
      subtitle: "We use a cutting-edge technology stack for optimal performance",
      items: [
        {
          icon: n8n,
          name: "n8n",
          description: "Top-notch automation tool"
        }
      ]
    },
    benefits: {
      title: "Benefits of our AI automation services",
      items: [
        {
          icon: ArrowTrendingUp,
          title: "Increased Efficiency",
          description: "Reduce manual work and save time with automated processes and workflows."
        },
        {
          icon: CurrencyDollar,
          title: "Cost Reduction",
          description: "Lower operational costs by automating repetitive tasks and reducing human error."
        },
        {
          icon: MagnifyingGlass,
          title: "Data-Driven Insights",
          description: "Make informed decisions with real-time analytics and predictive modeling."
        },
        {
          icon: Clock,
          title: "24/7 Operation",
          description: "Maintain continuous business operations with automated systems that never sleep."
        }
      ]
    }
  }
]
