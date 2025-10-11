import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQItem {
  question: string;
  answerContent: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title: string;
}

const FAQAccordion = ({ items, title }: FAQAccordionProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-zinc-200 text-center">{title}</h3>
      <Accordion type='single' collapsible className='w-full space-y-2'>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className='border border-zinc-700 rounded-md overflow-hidden data-[state=open]:bg-zinc-800/30'
          >
            <AccordionTrigger className='px-5 text-zinc-200 hover:text-zinc-100 data-[state=closed]:py-4'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='text-zinc-300 px-5'>
              {item.answerContent}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQAccordion
