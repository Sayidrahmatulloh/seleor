import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { EllipsisVerticalIcon } from 'lucide-react'

const actions = ['Confirm order', 'Start delivery', 'Delivery in progress', 'Complete delivery']

const OrderActions = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size='icon'
          className='size-6'
          variant='outline'>
          <EllipsisVerticalIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex w-48 flex-col gap-1 p-2'>
        {actions.map((action, idx) => (
          <Button
            key={idx}
            variant='ghost'
            className='justify-start text-left'>
            {idx + 1}. {action}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export { OrderActions }
