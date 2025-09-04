import { Button } from '@/components/ui/button'
import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react'

const Pagination = () => {
  return (
    <div className='mt-4 flex w-full items-center justify-center gap-2'>
      <Button size='icon'>
        <ChevronsLeftIcon className='size-6' />
      </Button>
      <p className=''>1</p>
      <Button size='icon'>
        <ChevronsRightIcon className='size-6' />
      </Button>
    </div>
  )
}
export { Pagination }
