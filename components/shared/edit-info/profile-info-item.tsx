import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IProfileInfo } from '@/types'

const ProfileInfoItem = (profileInfo: IProfileInfo) => {
  return (
    <Accordion
      type='single'
      collapsible>
      <AccordionItem value={`${profileInfo.id}`}>
        <AccordionTrigger>
          <div className='flex flex-col space-y-0'>
            <h2 className='font-bold'>{profileInfo.label}</h2>
            <p className='text-muted-foreground'>{profileInfo.value}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>content</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export { ProfileInfoItem }
