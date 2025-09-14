import { Badge } from '@/components/ui/badge'
import { products } from '@/const'
import { formatPrice } from '@/lib/functions'
import Image from 'next/image'
import { CreateOrderBtn } from '../_components/create-order-btn'

const ProductPage = () => {
  const product = products[0]
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
      <div className='bg-secondary relative col-span-2 h-[70vh] w-full rounded-md'>
        <Image
          src={product.image}
          fill
          className='object-cover'
          alt={product.title}
        />
      </div>
      <div className='flex flex-col space-y-1 self-center'>
        <h1 className='text-4xl font-bold'>{product.title}</h1>
        <Badge
          className='w-fit'
          variant='secondary'>
          # {product.category}
        </Badge>
        <p className='text-muted-foreground text-xs'>{product.description}</p>
        <p className='font-bold'>{formatPrice(product.price)}</p>
        <CreateOrderBtn />
        <div className='text-xs'>
          Your purchase is secure with us. We do not store any credit cord information. We use Payme
          for payment proccessing.
        </div>
      </div>
    </div>
  )
}
export default ProductPage
