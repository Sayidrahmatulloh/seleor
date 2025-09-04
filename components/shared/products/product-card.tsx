'use client'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/functions'
import { IProduct } from '@/types'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ProductCard = ({ id, title, price, image, category }: IProduct) => {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false)

  const handleProductClick = () => {
    router.push(`/product/${id}`)
  }

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <div
      className='cursor-pointer overflow-hidden rounded-md'
      onClick={handleProductClick}>
      <div className='bg-secondary group relative aspect-square'>
        <Image
          src={image || `/products/${id}.webp`}
          fill
          alt={title}
          className='object-cover transition-transform group-hover:scale-110'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div
          className={`absolute top-2 right-2 z-10 flex items-center transition-all duration-300 group-hover:opacity-100 ${isLiked ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            size='icon'
            variant={isLiked ? 'ghost' : 'default'}
            onClick={handleLikeClick}>
            <HeartIcon
              className={`size-4 transition-colors ${
                isLiked ? 'fill-blue-500 text-blue-500' : 'fill-white'
              }`}
            />
          </Button>
        </div>
      </div>
      <div className='mt-3 space-y-1'>
        <div className='flex items-start justify-between gap-2'>
          <h3 className='line-clamp-2 text-sm leading-tight font-semibold'>{title}</h3>
          <p className='text-primary shrink-0 text-sm font-bold'>{formatPrice(price)}</p>
        </div>
        <p className='text-muted-foreground text-xs capitalize'>{category}</p>
      </div>
    </div>
  )
}

export { ProductCard }
