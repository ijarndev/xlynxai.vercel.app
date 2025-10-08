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
import webDevHeroImage from '../assets/svg/website-building.svg'

// ai automation
import AdjustmentsHorizontal from 'astro-heroicons/outline/AdjustmentsHorizontal.astro'
import CircleStack from 'astro-heroicons/outline/CircleStack.astro'
import ChatBubbleLeftRight from 'astro-heroicons/outline/ChatBubbleLeftRight.astro'
import ArrowTrendingUp from 'astro-heroicons/outline/ArrowTrendingUp.astro'
import n8n from '../assets/svg/n8n.svg'
import CurrencyDollar from 'astro-heroicons/outline/CurrencyDollar.astro'
import Clock from 'astro-heroicons/outline/Clock.astro'
import Sparkles from 'astro-heroicons/outline/Sparkles.astro'
// import aiHeroImage from '../assets/img/services/ai-hero.png'

export const services = [
  {
    slug: "web-development",
    name: "Web Development",
    icon: CodeBracket,
    title: "Your Professional Website Ready in a Few Days | Modern & Fast Websites",
    subtitle: "Modern design, responsive to any device and thought so your business gains confidence since the very first click.",
    valueExpression: 'Our prices start at just <strong>$199</strong> and your website can be live in just a few days!',
    heroImage: webDevHeroImage,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus perspiciatis animi a? Nulla quisquam voluptatum doloribus provident eius dignissimos!',
    ctaText: "I Want My Free Quote",
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
    ctaText: "Automate My Business",
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

// FAQ Data
export const questionsAboutTheCompany = [
  {
    question: "What is XLynx AI and what do you do?",
    answerContent: "XLynx AI is a technology company specializing in artificial intelligence solutions and web development. We help businesses transform their operations through custom AI automation, intelligent web applications, and cutting-edge technology solutions."
  },
  {
    question: "How long has XLynx AI been in business?",
    answerContent: "XLynx AI has been providing innovative technology solutions since our founding. We have built a strong reputation for delivering high-quality AI and web development services to businesses across various industries."
  },
  {
    question: "What industries do you serve?",
    answerContent: "We serve a wide range of industries including e-commerce, healthcare, finance, education, manufacturing, and professional services. Our AI and web solutions are adaptable to meet the specific needs of any business sector."
  },
  {
    question: "Where is XLynx AI located?",
    answerContent: "XLynx AI operates as a remote-first company, allowing us to serve clients globally while maintaining high standards of service and communication through digital platforms."
  }
]

export const questionsAboutTheService = [
  {
    question: "How do you approach AI automation projects?",
    answerContent: "We start with a comprehensive analysis of your current processes, identify automation opportunities, and develop a customized solution that integrates seamlessly with your existing systems while maximizing efficiency gains."
  },
  {
    question: "What is included in your web development services?",
    answerContent: "Our web development services include custom website design, responsive development, SEO optimization, performance tuning, security implementation, and ongoing maintenance support. We also provide e-commerce solutions and web applications."
  },
  {
    question: "How long does a typical project take?",
    answerContent: "Project timelines vary based on complexity and scope. Simple websites can be completed in a few days, while complex AI automation projects may take several weeks. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answerContent: "Yes, we offer comprehensive ongoing support including maintenance, updates, troubleshooting, and feature enhancements. We have various support packages to meet different needs and budgets."
  },
  {
    question: "Can you integrate with our existing systems?",
    answerContent: "Absolutely. We specialize in creating solutions that integrate seamlessly with existing business systems, databases, and workflows. Our team ensures minimal disruption during implementation."
  }
]

export const questionsAboutTheProduct = [
  {
    question: "What technologies do you use for AI automation?",
    answerContent: "We use cutting-edge technologies including n8n for workflow automation, machine learning frameworks, natural language processing tools, and custom AI models tailored to your specific business requirements."
  },
  {
    question: "Are your websites mobile-friendly?",
    answerContent: "Yes, all our websites are built with responsive design principles, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops. Mobile optimization is a core part of our development process."
  },
  {
    question: "How do you ensure website security?",
    answerContent: "We implement multiple layers of security including SSL certificates, secure coding practices, regular security updates, and compliance with industry standards. We also provide security monitoring and incident response services."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answerContent: "Yes, we build SEO-friendly websites from the ground up and can provide digital marketing services including content strategy, social media integration, and analytics implementation to help drive traffic and conversions."
  },
  {
    question: "What hosting solutions do you recommend?",
    answerContent: "We work with top hosting providers like Vercel for modern applications and Hostinger for WordPress sites. We choose hosting solutions based on your specific needs, ensuring optimal performance, security, and scalability."
  }
]
