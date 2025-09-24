import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Steps () {
  const { scrollYProgress } = useScroll()
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.001
  })

  return (
    <div className="mt-30 grid gap-10 md:grid-cols-4 md:gap-0 relative">
        <div className="hidden md:block w-full h-2 bg-zinc-600 rounded-full overflow-hidden absolute left-0 top-6">
          <motion.div style={{ scaleX: scale }} className={`h-full background-theme rounded-full`} />
        </div>

        <div>
          <StepItem
            number={1}
            title="Free Consultation"
            description="We review your goals and needs"
          />
        </div>

        <StepItem
          number={2}
          title="Design & Customization"
          description="Your site, tailored to your brand and style"
        />

        <StepItem
          number={3}
          title="Delivery & Training"
          description="We hand it over and show you how"
        />

        <StepItem
          number={4}
          title="Initial Support"
          description="30 days of adjustments included"
        />
      </div>
  )
} 

export function StepItem ({
  number, title, description
} : {
  number: number, title: string, description: string
}) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full background-theme text-xl font-bold text-zinc-100">
        {number}
      </div>
      <div className="mt-4 text-center max-w-[300px]">
        <h3 className="text-xl font-bold text-zinc-100">{title}</h3>
        <p className="mt-2 text-zinc-300">{description}</p>
      </div>
    </div>
  )
}