import Clock from '@heroicons/react/24/outline/ClockIcon'
import Users from '@heroicons/react/24/outline/UserGroupIcon'
import ArrowTrendingUp from 'astro-heroicons/outline/ArrowTrendingUp.astro'
import Money from '@heroicons/react/24/outline/CurrencyDollarIcon'
import ComparisonCard from './ComparisonCard'

export function BenefitsComparison() {
  const mockData = {
    benefits: [
      {
        icon: Clock,
        name: "Time",
        description: "For the owner and team to focus on what matters",
        positive: [
          "Available 24/7",
          "Instant responses",
          "No breaks needed",
          "No scheduling conflicts",
          "Multiple conversations at once",
          "No time off required"
        ],
        negative: [
          "Limited working hours",
          "Response delays",
          "Regular breaks needed",
          "Scheduling constraints",
          "One conversation at a time",
          "Vacation and sick leave required"
        ]
      },
      {
        icon: Users,
        name: "Customers",
        description: "Serve more clients without hiring more staff", 
        positive: [
          "Unlimited concurrent users",
          "Consistent service quality",
          "No capacity limits",
          "Global availability",
          "No language barriers",
          "Scalable instantly"
        ],
        negative: [
          "Limited number of clients",
          "Variable service quality",
          "Physical capacity limits",
          "Location dependent",
          "Language limitations",
          "Slow scaling process"
        ]
      },
      {
        icon: ArrowTrendingUp,
        name: "Revenue",
        description: "Fewer missed appointments, more closed sales",
        positive: [
          "No salary overhead",
          "Predictable costs",
          "Zero training costs",
          "No benefits expense",
          "Instant deployment",
          "Low maintenance cost"
        ],
        negative: [
          "Regular salary payments",
          "Variable costs",
          "Ongoing training costs",
          "Benefits packages",
          "Lengthy onboarding",
          "High maintenance cost"
        ]
      },
      {
        icon: Money,
        name: "Cost",
        description: "Less than 2 days of employee wages for 30 days of work",
        positive: [
          "Fixed monthly cost",
          "No overtime charges",
          "No insurance needed",
          "No equipment costs",
          "No office space required",
          "No HR expenses"
        ],
        negative: [
          "Variable monthly costs",
          "Overtime payments",
          "Insurance requirements",
          "Equipment expenses",
          "Office space needed",
          "HR department costs"
        ]
      },
    ],
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-20 mt-20">
        <div className="grid grid-cols-4 gap-10">
          {
            mockData.benefits.map(benefit => (
              <div className="flex items-center gap-x-8 border py-3 px-4 rounded-xl border-zinc-100/10">
                <benefit.icon width={48} className="text-theme" />
                <div>
                  <h3 className="text-lg text-zinc-100 font-medium">{benefit.name}</h3>
                  {/* <p className="text-secondary">{benefit.description}</p> */}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="mt-10 rounded-xl">
          <h3 className="text-center text-zinc-100 font-semibold text-2xl">Cost Comparison</h3>

          <div className="mt-10 grid grid-cols-2 gap-10 gap-y-3">
            {/* {
              mockData.costComparison.map(item => (
                <ComparisonCard
                  name={item.name}
                  subtitle={item.subTitle}
                  mainValue={item.mainValue}
                  subValue={item.subValue}
                  items={item.items}
                  type={item.type}
                />
              ))
            } */}
            {
              mockData.benefits.map(benefit => {
                return (
                  <>
                    <ComparisonCard
                      name={benefit.name}
                      subtitle={benefit.description}
                      mainValue="AI-Powered"
                      subValue="Benefits"
                      items={benefit.positive}
                      type='positive'
                    />

                    <ComparisonCard
                      name={benefit.name}
                      subtitle={benefit.description}
                      mainValue="AI-Powered"
                      subValue="Limitations"
                      items={benefit.positive}
                      type='negative'
                    />
                  </>
                )
              })
            }
          </div>
        </div>
    </>
  )
}