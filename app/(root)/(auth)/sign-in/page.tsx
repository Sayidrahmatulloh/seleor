'use client'
import { Title } from '@/components/lib/title'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignInPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(value: z.infer<typeof loginSchema>) {
    console.log(value)
  }
  return (
    <Card className='w-1/2 p-4'>
      <Title label='Sign In' />
      <p className='text-muted-foreground text-sm'>Welcome back! Please sign in to your account</p>
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
                    placeholder='•••••'
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
          <Button type='submit'>Submit</Button>
        </form>
      </Form>

      <div className='text-muted-foreground mt-4 text-sm'>
        Do not have an account ?{' '}
        <Button
          asChild
          variant='link'
          className='p-0'>
          <Link href='/sign-up'>Sign Up</Link>
        </Button>
      </div>
    </Card>
  )
}

export default SignInPage
