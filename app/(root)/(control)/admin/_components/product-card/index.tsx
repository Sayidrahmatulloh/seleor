'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useProductStore } from '@/hooks/useProductStore'
import { formatPrice } from '@/lib/functions'
import { IProduct } from '@/types'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  product: Partial<IProduct>
}

const ProductCard: FC<Props> = ({ product }) => {
  const { setOpen } = useProductStore()
  function onEdit() {
    setOpen(true)
  }
  return (
    <div className='flex h-auto flex-col justify-between rounded-md border'>
      <div className='bg-secondary relative'>
        <Image
          src={product.image!}
          width={200}
          height={200}
          className='mx-auto'
          alt={product.title!}
        />
        <Badge className='absolute top-1 left-1'>{product.category}</Badge>
      </div>

      <div className='p-2'>
        <div className='flex items-center justify-between text-sm'>
          <h1 className='font-bold'>{product.title}</h1>
          <p className='font-medium'>{formatPrice(product.price)}</p>
        </div>
        <p className='text-muted-foreground line-clamp-5 text-xs'>{product.description}</p>
        <Separator className='my-2' />
      </div>

      <div className='grid grid-cols-2 gap-2 px-2 pb-2'>
        <Button
          variant='secondary'
          onClick={onEdit}>
          Edit
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant='outline'>Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
export { ProductCard }
