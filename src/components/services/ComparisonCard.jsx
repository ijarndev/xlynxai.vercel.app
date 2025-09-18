import { useState } from "react";

import Check from '@heroicons/react/24/outline/CheckIcon'
import XMark from '@heroicons/react/24/outline/XMarkIcon'
import ChevronDown from '@heroicons/react/24/outline/ChevronDownIcon'
import ChevronUp from '@heroicons/react/24/outline/ChevronUpIcon'

export default function ComparisonCard({
  name,
  subtitle,
  mainValue,
  subValue,
  items,
  type = "neutral",
}) {
  const [open, setOpen] = useState(false);

  const typeClasses = {
    card: type === "negative" ? "bg-red-500/10" : "bg-sky-500/10",
    mainValue: type === "negative" ? "text-red-500" : "text-sky-500",
    itemIcon: type === "negative" ? "text-red-500" : "text-sky-500",
  };

  return (
    <div
      className={`p-4 sm:p-8 ${typeClasses.card} cursor-pointer rounded-xl`}
      onClick={() => setOpen(!open)}  
    >
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-xl text-zinc-100">{name}</p>
          <p className="text-sm text-secondary">{subtitle}</p>
        </div>

        <div className="text-right">
          <p className={`${typeClasses.mainValue} text-xl font-semibold`}>{mainValue}</p>
          <p className="text-sm text-zinc-100">{subValue}</p>
        </div>

        <button className="pl-5">
          {
            open ? <ChevronUp width={28} className="text-zinc-100" /> : <ChevronDown width={28} className="text-zinc-100" />
          }
        </button>
      </div>

      <div
        className={`transition-all overflow-hidden ${
          open ? "pt-10 h-auto" : "pt-0 h-0"
        }`}
      >
        <ul>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-x-3">
              <span className={typeClasses.itemIcon}>
                { type === 'negative' ? <XMark width={24} className='text-red-500' /> : <Check width={24} className='text-sky-500' /> }
              </span>
              <p className="text-zinc-100">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}