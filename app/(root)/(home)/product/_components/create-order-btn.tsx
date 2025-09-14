import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Image from 'next/image'

const CreateOrderBtn = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size='lg'
          className='w-fit'>
          Purchase
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-56 rounded-md bg-white p-1'
        side='right'>
        <div className='flex flex-col space-y-1'>
          {['click', 'payme', 'stripe', 'uzum'].map((pay) => (
            <Button
              key={pay}
              variant='outline'>
              <Image
                src={`/pay/${pay}.svg`}
                alt={pay}
                className='cursor-pointer object-cover'
                width={70}
                height={50}
              />
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
export { CreateOrderBtn }
