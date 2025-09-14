import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/functions'
import { IProduct } from '@/types'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

const WatchListCard: FC<IProduct> = (product) => {
  return (
    <div className='group relative flex flex-col overflow-hidden rounded-md border'>
      <div className='bg-secondary relative flex justify-center'>
        <Image
          src={product.image!}
          width={200}
          height={200}
          alt={product.title}
          className='object-cover transition-transform group-hover:scale-110'
        />
        <div className='absolute top-2 right-2 z-50 flex items-center'>
          <Button
            size='icon'
            variant='ghost'>
            <HeartIcon className='fill-blue-500 text-blue-500' />
          </Button>
        </div>
      </div>
      <div className='p-2'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold'>{product.title}</h1>
          <p className='font-medium'>{formatPrice(product.price)}</p>
        </div>
        <p className='text-muted-foreground line-clamp-5 text-sm leading-1'></p>
      </div>
    </div>
  )
}
export { WatchListCard }
