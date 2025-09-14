import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Edit2Icon } from 'lucide-react'

const ProfileAvatar = () => {
  return (
    <div className='bg-secondary mb-2 flex h-52 w-full items-center justify-center'>
      <div className='relative'>
        <Avatar className='size-32'>
          <AvatarFallback className='bg-primary text-6xl text-white'>HS</AvatarFallback>
        </Avatar>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size='icon'
              variant='secondary'
              className='border-primary absolute right-0 bottom-0 rounded-full border'>
              <Edit2Icon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
export { ProfileAvatar }
