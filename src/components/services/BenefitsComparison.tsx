import Clock from "@heroicons/react/24/outline/ClockIcon";
import Users from "@heroicons/react/24/outline/UserGroupIcon";
import Money from "@heroicons/react/24/outline/CurrencyDollarIcon";
import ComparisonCard from "./ComparisonCard";

import ArrowTrendingUp from "@heroicons/react/24/outline/ArrowTrendingUpIcon";
import React, { useState } from "react";
import { motion } from "motion/react";

export function BenefitsComparison() {
  const [currentData, setCurrentData] = useState("time");

  const mockData = {
    benefits: [
      {
        slug: "time",
        icon: Clock,
        name: "Time",
        description: "For the owner and team to focus on what matters",
        positive: [
          "Available 24/7",
          "Instant responses",
          "No breaks needed",
          "No scheduling conflicts",
          "Multiple conversations at once",
          "No time off required",
        ],
        negative: [
          "Limited working hours",
          "Response delays",
          "Regular breaks needed",
          "Scheduling constraints",
          "One conversation at a time",
          "Vacation and sick leave required",
        ],
      },
      {
        slug: "customers",
        icon: Users,
        name: "Customers",
        description: "Serve more clients without hiring more staff",
        positive: [
          "Unlimited concurrent users",
          "Consistent service quality",
          "No capacity limits",
          "Global availability",
          "No language barriers",
          "Scalable instantly",
        ],
        negative: [
          "Limited number of clients",
          "Variable service quality",
          "Physical capacity limits",
          "Location dependent",
          "Language limitations",
          "Slow scaling process",
        ],
      },
      {
        slug: "revenue",
        icon: ArrowTrendingUp,
        name: "Revenue",
        description: "Fewer missed appointments, more closed sales",
        positive: [
          "No salary overhead",
          "Predictable costs",
          "Zero training costs",
          "No benefits expense",
          "Instant deployment",
          "Low maintenance cost",
        ],
        negative: [
          "Regular salary payments",
          "Variable costs",
          "Ongoing training costs",
          "Benefits packages",
          "Lengthy onboarding",
          "High maintenance cost",
        ],
      },
      {
        slug: "cost",
        icon: Money,
        name: "Cost",
        description: "Less than 2 days of employee wages for 30 days of work",
        positive: [
          "Fixed monthly cost",
          "No overtime charges",
          "No insurance needed",
          "No equipment costs",
          "No office space required",
          "No HR expenses",
        ],
        negative: [
          "Variable monthly costs",
          "Overtime payments",
          "Insurance requirements",
          "Equipment expenses",
          "Office space needed",
          "HR department costs",
        ],
      },
    ],
  };

  function handleChangeData(event: React.MouseEvent) {
    const { slug } = (event.currentTarget as HTMLElement).dataset;
    setCurrentData(slug as string);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-20 mt-20">
        <div className="grid justify-items-stretch grid-cols-4 gap-10">
          {mockData.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex transition-colors duration-300 cursor-pointer justify-center xl:justify-start items-center gap-x-8 border py-3 px-4 rounded-xl border-zinc-100/10 ${
                currentData === benefit.slug ? "background-theme" : ""
              }`}
              data-slug={benefit.slug}
              onClick={handleChangeData}
            >
              <benefit.icon
                width={48}
                className={`min-w-8 ${
                  currentData === benefit.slug ? "text-zinc-100" : "text-theme"
                }`}
              />
              <div className="hidden xl:block">
                <h3 className="text-lg text-zinc-100 font-medium">
                  {benefit.name}
                </h3>
                {/* <p className="text-secondary">{benefit.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-xl">
        {/* <h3 className="text-center text-zinc-100 font-semibold text-2xl">Cost Comparison</h3> */}

        <div className="mt-10 grid lg:grid-cols-2 gap-10 gap-y-3">
          {mockData.benefits
            .filter((b) => b.slug === currentData)
            .map((benefit, index) => {
              return (
                <React.Fragment key={benefit.slug}>
                  <motion.div
                    key={`${benefit.slug}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ComparisonCard
                      key={index}
                      name={benefit.name}
                      subtitle={benefit.description}
                      mainValue="Human Employee"
                      subValue="Limitations"
                      items={benefit.negative}
                      type="negative"
                    />
                  </motion.div>

                  <motion.div
                    key={`${benefit.slug}`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  >
                    <ComparisonCard
                      key={index}
                      name={benefit.name}
                      subtitle={benefit.description}
                      mainValue="AI-Powered"
                      subValue="Benefits"
                      items={benefit.positive}
                      type="positive"
                    />
                  </motion.div>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
}
