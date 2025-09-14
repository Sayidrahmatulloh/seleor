import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IProfileInfo } from '@/types'
import { FC } from 'react'
import { ProfileEditForm } from './profile-edit-form'

const ProfileInfoItem: FC<IProfileInfo> = (profileInfo) => {
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
        <AccordionContent className='border-l-primary border-l px-4'>
          <ProfileEditForm {...profileInfo} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export { ProfileInfoItem }
