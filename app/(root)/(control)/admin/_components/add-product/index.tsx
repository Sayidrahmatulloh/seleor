'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import { categoryOptions } from '@/const'
import { useProductStore } from '@/hooks/useProductStore'
import { formatPrice } from '@/lib/functions'
import { productSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircleIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const AddProduct = () => {
  const { open, setOpen } = useProductStore()
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
      imageKey: '',
    },
  })

  function onSubmit(value: z.infer<typeof productSchema>) {
    console.log(value)
  }

  function onOpen() {
    setOpen(true)
  }

  return (
    <>
      <Button
        size='sm'
        onClick={onOpen}>
        <span>Add Product</span>
        <PlusCircleIcon />
      </Button>
      <Sheet
        open={open}
        onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Manage your product</SheetTitle>
            <SheetDescription>
              Field marked with are required fields and must be filled
            </SheetDescription>
            <Separator className='my-3' />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-2'>
                <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem className='space-y-0'>
                      <Label className='text-xs'>Title</Label>
                      <FormControl>
                        <Input
                          placeholder='Adidas shoes'
                          className='bg-secondary'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-xs text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem className='space-y-0'>
                      <Label className='text-xs'>Description</Label>
                      <FormControl>
                        <Textarea
                          placeholder='Adidas shoes are the best shoes in the world'
                          className='bg-secondary'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-xs text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='category'
                  render={({ field }) => (
                    <FormItem className='space-y-0'>
                      <Label className='text-xs'>Category</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='bg-secondary w-full text-xs'>
                            <SelectValue placeholder='Select category' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categoryOptions.map((category) => (
                            <SelectItem
                              value={category.value}
                              key={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className='text-xs text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem className='space-y-0'>
                      <Label className='text-xs'>
                        {!form.watch('price')
                          ? 'Price'
                          : `Price : ${formatPrice(Number(form.watch('price')))}`}
                      </Label>
                      <FormControl>
                        <Input
                          placeholder='100.000 UZS'
                          type='number'
                          className='bg-secondary'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-xs text-red-500' />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='w-full'>
                  Submit
                </Button>
              </form>
            </Form>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
export { AddProduct }
