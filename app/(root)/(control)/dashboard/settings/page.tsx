'use client'
import { Title } from '@/components/lib/title'
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
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { passwordSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const SettingsPage = () => {
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  })
  function onSubmit(value: z.infer<typeof passwordSchema>) {
    console.log(value)
  }
  return (
    <div className='space-y-4'>
      <Title label='Danger zone' />
      <Separator className='my-3' />
      <div className='bg-secondary flex flex-col space-y-2 p-4'>
        <h1 className='text-lg font-bold'>Delete account</h1>
        <p className='text-muted-foreground text-sm'>
          Deleting your account will remove all your data from our service. This action is
          irreversible.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className='w-fit'
              variant='destructive'>
              Delete account
            </Button>
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
      <Title label='Change Password' />
      <Separator className='my-3' />
      <div className='bg-secondary p-4'>
        <div className='w-1/2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-3'>
              <FormField
                control={form.control}
                name='oldPassword'
                render={({ field }) => (
                  <FormItem className='space-y-0'>
                    <Label>Old password</Label>
                    <FormControl>
                      <Input
                        placeholder='••••'
                        type='password'
                        className='bg-white'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs text-red-500' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='newPassword'
                render={({ field }) => (
                  <FormItem className='space-y-0'>
                    <Label>New password</Label>
                    <FormControl>
                      <Input
                        placeholder='••••'
                        type='password'
                        className='bg-white'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs text-red-500' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmNewPassword'
                render={({ field }) => (
                  <FormItem className='space-y-0'>
                    <Label>Confirm new password</Label>
                    <FormControl>
                      <Input
                        placeholder='••••'
                        type='password'
                        className='bg-white'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs text-red-500' />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-fit'>
                Change Password
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default SettingsPage
