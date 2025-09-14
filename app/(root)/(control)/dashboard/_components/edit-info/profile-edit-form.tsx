'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { emailSchema, fullNameSchema } from '@/lib/validations'
import { IProfileInfo } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const ProfileEditForm: FC<IProfileInfo> = (profileInfo) => {
  const schema = profileInfo.type == 'email' ? emailSchema : fullNameSchema
  const defaultValue = profileInfo.type == 'email' ? { email: '' } : { fullName: '' }

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValue,
  })

  function onSubmit(value: z.infer<typeof schema>) {
    console.log(value)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'>
        <FormField
          control={form.control}
          name={profileInfo.name}
          render={({ field }) => (
            <FormItem>
              <Label className='text-xs'>{profileInfo.label}</Label>
              <FormControl>
                <Input
                  className='bg-white'
                  type={profileInfo.type}
                  placeholder={profileInfo.value}
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-sm text-red-500' />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='mb-0.5 self-end'
          size='sm'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
export { ProfileEditForm }
