'use client'
import { Title } from '@/components/lib/title'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignUpPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  function onSubmit(value: z.infer<typeof registerSchema>) {
    console.log(value)
  }
  return (
    <Card className='w-1/2 p-4'>
      <Title label='Sign Up' />
      <p className='text-muted-foreground text-sm'>
        Welcome to our platform! Please sign up to create an account
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4'>
          <FormField
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input
                    placeholder='example@mail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-sm text-red-500' />
              </FormItem>
            )}
            control={form.control}
            name='email'
          />
          <FormField
            render={({ field }) => (
              <FormItem>
                <Label>Password</Label>
                <FormControl>
                  <Input
                    placeholder='••••'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-sm text-red-500' />
              </FormItem>
            )}
            control={form.control}
            name='password'
          />
          <FormField
            render={({ field }) => (
              <FormItem>
                <Label>Confirm Password</Label>
                <FormControl>
                  <Input
                    placeholder='••••'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-sm text-red-500' />
              </FormItem>
            )}
            control={form.control}
            name='confirmPassword'
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>{' '}
      <div className='text-muted-foreground mt-4 text-sm'>
        Already have an account ?{' '}
        <Button
          asChild
          variant='link'
          className='p-0'>
          <Link href='/sign-in'>Sign In</Link>
        </Button>
      </div>
    </Card>
  )
}
export default SignUpPage
